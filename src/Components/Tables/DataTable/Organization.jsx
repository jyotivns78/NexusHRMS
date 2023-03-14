// import React, { Fragment, useState, useCallback, useMemo } from 'react';
import React, { Fragment, useState } from 'react';
// import differenceBy from 'lodash/differenceBy';
// import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import { tableData } from '../../../Data/DummyTableData';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
// import { Breadcrumbs } from '../../../AbstractElements';
// import HeaderCard from '../../Common/Component/HeaderCard';
import { Btn } from "../../../AbstractElements";
import Search from './Search';
import { Link } from 'react-router-dom';

const Organization = () => {

  // const [data, setData] = useState(tableData);
  const [data] = useState(tableData);
  // const [selectedRows, setSelectedRows] = useState([]);
  // const [toggleCleared, setToggleCleared] = useState(false);

  const tableColumns = [
    {
      name: 'S.N',
      selector: (row) => row.sn,
      sortable: true,
      center: true,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
      center: true,
    },
    {
      name: 'Company',
      selector: (row) => row.company,
      sortable: true,
      center: true,
    },
    {
      name: 'Company Address',
      selector: (row) => row.company_address,
      sortable: true,
      center: true,
    },
    {
      name: 'Contact',
      selector: (row) => row.contact,
      sortable: true,
      center: true,
    },
    {
      name: 'Company Email',
      selector: (row) => row.company_email,
      sortable: true,
      center: true,
    },
    {
      name: 'Action',
      selector: (row) => row.action,
      sortable: true,
      center: true,
    },
  ];
  // const handleRowSelected = useCallback(state => {
  //   setSelectedRows(state.selectedRows);
  // }, []);

  // const contextActions = useMemo(() => {
  //   const handleDelete = () => {
  //     if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.name)}?`)) {
  //       setToggleCleared(!toggleCleared);
  //       setData(differenceBy(data, selectedRows, 'name'));
  //       toast.success('Successfully Deleted !');
  //     }
  //   };

  //   return <button key="delete" className="btn btn-danger" onClick={handleDelete}>Delete</button>;
  // }, [data, selectedRows, toggleCleared]);

  return (
    <Fragment>
      
      
      <Container fluid={true} className="datatables">
        <Row>
          <Col sm="12">
            <Card>
              <div className='organization-header' style={{ display: "flex", height: "40px", marginTop: "20px", justifyContent: "space-between", marginLeft: "20px", marginRight: "30px" }}>
              <h3>Create Organization</h3>
              <Search style={ { height: "40px" } } />
              <Link to={ `${process.env.PUBLIC_URL}/test` }><Btn
                attrBtn={{
                  color: "primary",
                  className: "btn-block",
                }}
              >
                Create Lead
              </Btn>
              </Link>
              </div>
              <CardBody>
                <DataTable
                  data={data}
                  columns={tableColumns}
                  striped={true}
                  center={true}
                  // selectableRows
                  persistTableHead
                  // contextActions={contextActions}
                  // onSelectedRowsChange={handleRowSelected}
                  // clearSelectedRows={toggleCleared}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );

};

export default Organization;