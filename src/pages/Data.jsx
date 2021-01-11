import React, { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { inArray } from "../common/functions";
import Header from "../components/Header.jsx";
import RemoveIcon from "../Assets/images/remove-gold.svg";
import ReloadIcon from "../Assets/images/reload.svg";

export default function Data() {
  const [filterText, setFilterText] = useState("");
  const data = [
    {
      aditionalInformation: "Piso 12",
      age: 25,
      city: "CDMX",
      country: "MX",
      email: "edgar.pozadas@platimex.com.mx",
      firstName: "Platimex",
      idClient: 1,
      idLeadStatus: 1,
      insertDate: "2021-01-11 10:40",
      lastName: "Sofware Solutions",
      leadStatus: "New",
      phoneNumber: "5572037160",
      state: "CDMX",
      street: "Insurgentes Sur 105",
      zipCode: "06300"
    },
  ];
  const columns = [
    {
      name: "ID Client",
      selector: "idClient",
      sortable: true,
    },
    {
      name: "First Name",
      selector: "firstName",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: "lastName",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: "phoneNumber",
      sortable: true,
    },
    {
      name: "Country",
      selector: "country",
      sortable: true,
    },
    {
      name: "Reg Information",
      selector: "insertDate",
      sortable: true,
    },
    {
      name: "Remove",
      cell: () => (
        <button>
          <img src={RemoveIcon} alt="Remove" />
        </button>
      ),
    },
  ];
  const filteredItems = data.filter((item) => {
    let a = Object.keys(item).map((element) => {
      if (
        item[element] &&
        item[element]
          .toString()
          .toLowerCase()
          .includes(filterText.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    if (inArray(true, a)) {
      return true;
    }
    return false;
  });

  const FilterComponent = ({ onFilter }) => (
    <article className="filterTable">
      <span>
        <button>
          <img src={ReloadIcon} alt="Reload" />
        </button>{" "}
      </span>
      <span>
        <input
          id="search"
          type="text"
          placeholder="Search"
          aria-label="Search Input"
          onChange={onFilter}
          className="searchFilter"
        />
      </span>
    </article>
  );
  const subHeaderComponentMemo = useMemo(() => {
    return <FilterComponent onFilter={(e) => setFilterText(e.target.value)} />;
  }, []);
  return (
    <>
      <Header active="data" />
      <div className="general">
        <h1>Data</h1>
        <div className="tableContainer">
          <DataTable
            columns={columns}
            data={filteredItems}
            pagination
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
          />
        </div>
      </div>
    </>
  );
}
