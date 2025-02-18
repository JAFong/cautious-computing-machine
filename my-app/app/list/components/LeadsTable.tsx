"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import ReachOutButton from "./ReachOutButton";
import { useLeadsStore } from "@/app/state/leadsStore";
import useLeadsTable from "../hooks/useLeadsTable";

ModuleRegistry.registerModules([AllCommunityModule]);

const LeadsTable = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState([]);
  const fetchLeads = useLeadsStore((state) => state.fetchLeads);
  const leads = useLeadsTable();

  useEffect(() => {
    // async function fetchLeads() {
    //   const response = await fetch("/leads");
    //   const { data } = await response.json();

    //   setRowData(data);
    // }
    const isAuthenticated =
      sessionStorage.getItem("isAuthenticated") === "true";

    if (!isAuthenticated) {
      return;
    }

    fetchLeads();
  }, []);

  useEffect(() => {
    if (leads && leads.length > 0) {
      console.log(leads);
      setRowData(leads);
    }
  }, [leads]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "name", getQuickFilterText: (params) => params.value },
    { field: "submitted", getQuickFilterText: () => "" },
    { field: "status", getQuickFilterText: () => "" },
    { field: "country", getQuickFilterText: () => "" },
    {
      field: "button",
      headerName: "Button",
      cellRenderer: ReachOutButton,
    },
  ]);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current!.api.setGridOption(
      "quickFilterText",
      (document.getElementById("filter-text-box") as HTMLInputElement).value
    );
  }, []);

  const handleSelectChange = useCallback((e) => {
    const defaultRows = [
      { field: "name", getQuickFilterText: () => "" },
      { field: "submitted", getQuickFilterText: () => "" },
      { field: "status", getQuickFilterText: () => "" },
      { field: "country", getQuickFilterText: () => "" },
    ];

    for (const column of defaultRows) {
      if (column.field === e.target.value) {
        column.getQuickFilterText = (params) => params.value;
      }
    }

    setColDefs(defaultRows);
  }, []);

  return (
    <div className="h-[500px] w-[100%]">
      <div className="flex mb-[20px]">
        <input
          className="border-1 border-gray-100 h-[30px] w-[200px] mr-[20px] p-[20px] rounded-md"
          type="text"
          id="filter-text-box"
          placeholder="Search"
          onInput={onFilterTextBoxChanged}
        />

        <select
          name="filter"
          id="filter"
          onChange={(e) => handleSelectChange(e)}
          className="border-1 border-gray-100 h-[30px] w-[200px] mr-[20px] px-[12px] h-[42px] rounded-md"
        >
          <option value="name">Name</option>
          <option value="submitted">Submitted</option>
          <option value="status">Status</option>
          <option value="country">Country</option>
        </select>
      </div>

      <div className="h-[500px] w-[900px]">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          ref={gridRef}
          pagination
          paginationPageSize={10}
          paginationPageSizeSelector={false}
        />
      </div>
    </div>
  );
};

export default LeadsTable;
