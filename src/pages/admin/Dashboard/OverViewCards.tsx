import { Card, Col, Row, Statistic } from 'antd';

const OverViewCards = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={8} xl={8} style={{marginBottom:'10px'}}>
          <Card bordered={false}>
            <Statistic title="Total Sales" value={12345} prefix="$" />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={8} style={{marginBottom:'10px'}}>
          <Card bordered={false}>
            <Statistic title="Products Sold" value={125} />
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={8} style={{marginBottom:'10px'}}>
          <Card bordered={false}>
            <Statistic title="New Customers" value={45} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OverViewCards;
