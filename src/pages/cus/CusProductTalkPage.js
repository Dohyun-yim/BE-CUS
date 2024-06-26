import React from "react";
import Form from "../../components/cus/Form";

function ProductTalkPage() {
  const formFields = [
    {
      id: "pc_name",
      name: "pc_name",
      label: "이름 및 업체명",
      type: "text",
      required: true,
    },
    {
      id: "pc_phone",
      name: "pc_phone",
      label: "연락처",
      type: "text",
      required: true,
    },
    {
      id: "pc_email",
      name: "pc_email",
      label: "이메일",
      type: "email",
      required: true,
    },
    {
      id: "pc_product_id",
      name: "pc_product_id",
      label: "문의상품명",
      type: "text",
      required: true,
    },

    {
      id: "pc_content",
      name: "pc_content",
      label: "기타사항",
      type: "textarea",
      required: false,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));
    console.log(data); // 여기서 서버로 데이터를 보낼 수 있습니다.
  };

  return <Form title="제품 문의" fields={formFields} onSubmit={handleSubmit} />;
}

export default ProductTalkPage;
