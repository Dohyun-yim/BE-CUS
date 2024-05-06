// TableOrder.js
import React from "react";
import styles from "./TalkTable.module.css";
import mockDataProduct from "../../../mockdata/mockProduct.json";

const TableProduct = () => {
  return (
    <table className={styles.OrderTable}>
      <thead>
        <tr>
          <th>작성일</th>
          <th>업체명</th>
          <th>전화번호</th>
          <th>이메일</th>
          <th>문의상품</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {mockDataProduct.map((item) => (
          <tr key={item.id}>
            <td>{item.pc_created_at}</td>
            <td>{item.pc_name}</td>
            <td>{item.pc_phone}</td>
            <td>{item.pc_email}</td>
            <td>{item.pc_product_id}</td>
            <td
              className={
                item.pc_status === "요청 대기"
                  ? styles.waiting
                  : item.pc_status === "처리 완료"
                  ? styles.completed
                  : ""
              }
            >
              {item.pc_status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableProduct;
