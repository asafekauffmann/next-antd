"use client";
import React, { useState } from "react";
import { Button, Spin } from "antd";
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const onOk = (value) => {
  console.log('onOk: ', value);
};

const layout = () => {
  const [spinState, setSpinState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openLoad = () => {
    setIsOpen(true);
    setSpinState(true);
    setTimeout(() => {
      setSpinState(false);
    }, 2000);
  };

  return (
    <>
      <h1>Navigate to Top</h1>

      <div className="App">
        <Button type="primary" onClick={() => openLoad()}>
          Button
        </Button>

        {!isOpen ? (
          <></>
        ) : (
          <>
            <Spin spinning={spinState} fullscreen />
            <p>get right</p>
            <Space direction="vertical" size={6}>
              <RangePicker
                showTime={{
                  format: "HH:mm",
                }}
                format="YYYY-MM-DD HH:mm"
                onChange={(value, dateString) => {
                  console.log("Selected Time: ", value);
                  console.log("Formatted Selected Time: ", dateString);
                }}
                onOk={onOk}
              />
            </Space>
          </>
        )}
      </div>
    </>
  );
};

export default layout;
