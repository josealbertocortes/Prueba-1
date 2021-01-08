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
      idClient: 1,
      firstName: "Luis",
      lastName: "Lopez",
      email: "luis@platimex.com",
      gender: "Male",
      regInformation: "2019-10-30",
      country: "Mexico",
      source: "Venis",
      funnel: "Venis",
      agent: "Issai",
      lastContact: "Yesterday",
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
      name: "Gender",
      selector: "gender",
      sortable: true,
    },
    {
      name: "Reg Information",
      selector: "regInformation",
      sortable: true,
    },
    {
      name: "Country",
      selector: "country",
      sortable: true,
    },
    {
      name: "Source",
      selector: "source",
      sortable: true,
    },
    {
      name: "Funnel",
      selector: "funnel",
      sortable: true,
    },
    {
      name: "Agent",
      selector: "agent",
      sortable: true,
    },
    {
      name: "Last Contact",
      selector: "lastContact",
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
