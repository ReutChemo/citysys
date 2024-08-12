import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    DatePicker,
  } from 'antd';
  import React, { useEffect, useState } from 'react';
import { cities } from '../../api/getCities';

import { getStreets, Streets } from '../../api/getStreets';
  
  const { Option } = Select;
  
 
  const formItemLayout = {
    labelCol: {
      xs: { span: 30 },
      sm: { span: 20 },
     direction: 'rtl', textAlign: 'right' 
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 15,
        offset: 30,
      },
    }, direction: 'rtl', textAlign: 'right' 
  };
  

const Signup: React.FC = () => {
    const [form] = Form.useForm();
  
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
    

    const [AllCities, setAllCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    
    const [AllStreet, SetAllStreet] = useState([]); 
  
    //getStreets(selectedCity);
   
    useEffect(() => {
        setAllCities(cities);
      }, [cities]);
    

    useEffect(() => {
       getStreets(selectedCity);
      }, []);
    
    
    console.log('cities');
    console.log(cities);
    
    console.log(selectedCity);
   
    
    
    
    
  
    return (

      <Form
        {...formItemLayout}
        form={form}
        
        layout="vertical"
        name="register"
        onFinish={onFinish}
        style={{ width: 500 , direction: 'rtl', textAlign: 'right'}}
      >
      <Row>
        <Col span={12}>
            <Form.Item
                label="שם מלא"
                name="username"
                rules={[{ required: true, message: 'הכנס שם' }]}
                >
                <Input />
                </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item
            label="תעודת זהות"
            name="userID"
            rules={[{ required: true, message: 'הכנס מספר תז תקין' }]}
            >
            <InputNumber min={100000000} max={999999999}  />
            </Form.Item>
        </Col>
      </Row>
   
    <Row>    
        <Col span={12}>
                <Form.Item 
                label="תאריך לידה (MM/DD/YY) "
                name="userDate">
                <DatePicker  format={'MM/DD/YY'} />
                </Form.Item>
        </Col>
        <Col span={12}>
            <Form.Item
            name="email"
            label="אימייל"
            rules={[
                {
                type: 'email',
                message: 'מייל לא תקין',
                },
                {
                required: true,
                message: 'הכנס כתובת מייל',
                },
            ]}
            >
            <Input />
            </Form.Item>
        </Col>
    </Row>
    <Row>
       <Col span={12}> 
        <Form.Item
            name="city"
            label="עיר">
            <Select
                    style={{ width: 120 }}
                   onChange={(e: any) => {
                        //console.log(e);
                        setSelectedCity(e);
                        getStreets(e);

                    }}
                    options={cities.filter((v: { text: null; }) => v.text !== null).map((city: any)=>
                    ({ label: city, value: city }))}
                    />
        </Form.Item>
        </Col>
        <Col span={6}>
        <Form.Item
            name="street"
            label="רחוב">
            <Select
                style={{ width: 120 }}
                // onChange={null}
                options={Streets.filter((v: any) => v.text !== null && v.text !== '').map((city: any)=>
                    ({ label: city, value: city }))}
                    />
        </Form.Item>
         </Col>
      
            <Col span={6}>
                <Form.Item
                    label="מספר"
                    name="Streetnum"
                    rules={[{ required: true, message: 'הכנס מספר שלם' }]}
                    >
                    <InputNumber min={1} max={1000}  />
                </Form.Item>
            </Col>
      
    
    </Row> 
  <></>
     <Row>    
    <Col span={12}>  
        <Form.Item
          name="password"
          label="סיסמא"
          rules={[
            {
              required: true,
              message: 'הכנס סיסמא',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item
          name="confirm"
          label="אימות סיסמא"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'אנא אמת סיסמתך',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('סיסמאות לא תואמות'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        </Col>
     </Row>
     <Form.Item>
          <Checkbox>
           זכור אותי
          </Checkbox>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('אשר את תנאי השימוש')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            קראתי ואני מאשר את <a href="">תנאי השימוש</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            צור חשבון
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default Signup;

