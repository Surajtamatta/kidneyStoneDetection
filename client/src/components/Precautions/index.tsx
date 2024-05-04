
import React, { useState } from 'react';
import { Container, WrapperContent, Wrapper, Text, Title, Content } from "../../styles/components/Precautions";
import { PrecautionsData } from '../../data/precautiondata';
import { Card } from 'antd';

const Precautions = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>('cyst');
  
  const tabListNoTitle = PrecautionsData.map(data => ({
    key: data.key,
    label: data.label,
  }));

  const contentListNoTitle: Record<string, React.ReactNode> = {};
  PrecautionsData.forEach(data => {
    contentListNoTitle[data.key] = (
      <WrapperContent>
        <Title>Symptoms:</Title>
        {data.symptoms.map(symptom => (
          <Text key={symptom}>{symptom}</Text>
        ))}
        <Title>Treatments:</Title>
        <Wrapper>
          {data.treatment.map(treatment => (
            <Wrapper key={treatment.title}>
              <Title>{treatment.title}</Title>
              <Content>{treatment.contents}</Content>
            </Wrapper>
          ))}
        </Wrapper>
      </WrapperContent>
    );
  });

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  return (
    <Container>
    
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          tabBarExtraContent={null}
          onTabChange={onTabChange}
          tabProps={{
            size: 'middle',
          }}
        >
          {contentListNoTitle[activeTabKey]}
        </Card>
    </Container>
  );
};

export default Precautions;
