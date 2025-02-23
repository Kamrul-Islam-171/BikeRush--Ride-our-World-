
import { Card, Table } from 'antd';
import OverViewCards from '../admin/Dashboard/OverViewCards';
import OverviewCahrts from '../admin/Dashboard/OverviewCahrts';
import { ColumnType } from 'antd/es/table';

const AllOrders = () => {
 
  
  const tableData = [
    { key: 1, product: 'Rode E1', price: 10, quantity: 20 },
    { key: 2, product: 'R1 Bike', price: 120, quantity: 15 },
    { key: 3, product: 'Trailblazer', price: 150, quantity: 30 },
  ];

  const columns: ColumnType<{ key: number; product: string; price: number; quantity: number }>[] = [
    { title: 'Product', dataIndex: 'product', key: 'product' },
    { 
      title: 'Price', 
      dataIndex: 'price', 
      key: 'price', 
      responsive: ['sm', 'md', 'lg'], 
    },
    { 
      title: 'Quantity', 
      dataIndex: 'quantity', 
      key: 'quantity', 
    },
  ];

  

  return (
    <div className="max-w-full p-6 space-y-6">
   
      <OverViewCards></OverViewCards>

      <OverviewCahrts></OverviewCahrts>

      <Card title="Product Inventory" bordered={false}>
        <Table columns={columns} dataSource={tableData} pagination={false} />
      </Card>


    </div>
  );
};

export default AllOrders;
