 import moment from 'moment';
 import { Button, Form, Input,DatePicker,TimePicker  } from 'antd';
 const AddEventForm=(props)=>{
    const dateFormat = 'DD-MM-YYYY';
    const onFinish = (values) =>
    {
        props.onEventAdded(values);
    };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
const { TextArea } = Input;
 return (
   
  <div className='event-form-container'>
  <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
        "eventDate":moment(props.date, dateFormat),
        "Name":props.eventData[props.date]?.Name,
         "EventTime":props.eventData[props.date]?.EventTime,
            "Detail":props.eventData[props.date]?.Detail
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
       <Form.Item
        label="Name"
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please input event name!',
          },
        ]}
      >
        <Input  />
      </Form.Item>
      <Form.Item

        label="Event Date"
        name="eventDate"
        
      >
       <DatePicker  format={dateFormat} disabled />
      </Form.Item>
   <Form.Item
        label="EventTime"
        name="EventTime"
        rules={[
          {
            required: true,
            message: 'Please input time!',
          },
        ]}
      >
    
    
    <TimePicker.RangePicker  />

      </Form.Item>
     

       <Form.Item
        label="Detail"
        name="Detail"
        
      
      >
        <TextArea rows={4} placeholder="Optional" maxLength={150} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>

    </div>
  );

}
export default AddEventForm;