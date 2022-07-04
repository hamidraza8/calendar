import moment from "moment";
import * as dateFormate from "../../common/constants/DateTimeFormates";
import { Button, Form, Input, DatePicker, TimePicker } from "antd";
import { connect } from "react-redux";
import { saveEvent } from "../../redux/actions/eventActions";
import PropTypes from "prop-types";
import "../../../node_modules/antd/dist/antd.min.css";
import calendar from "./Calendar.module.scss";
const AddEventForm = ({
  onEventAdded,
  date,

  saveEvent,
  ...props
}) => {
  const onFinish = (values) => {
    saveEvent(values);
    props.toggelCalendarForm();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { TextArea } = Input;
  return (
    <div className={calendar["event-form-container"]}>
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
          eventDate: moment(date, dateFormate.DATE_FORMATE),
          Name: props.eventData?.Name,
          EventTime: props.eventData?.EventTime,
          Detail: props.eventData?.Detail,
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
              message: "Please input event name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Event Date" name="eventDate">
          <DatePicker format={dateFormate.DATE_FORMATE} disabled />
        </Form.Item>
        <Form.Item
          label="EventTime"
          name="EventTime"
          rules={[
            {
              required: true,
              message: "Please input time!",
            },
          ]}
        >
          <TimePicker.RangePicker />
        </Form.Item>

        <Form.Item label="Detail" name="Detail">
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
};

AddEventForm.propTypes = {
  saveEvent: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {};
}
const mapDispatchToProps = {
  saveEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventForm);
