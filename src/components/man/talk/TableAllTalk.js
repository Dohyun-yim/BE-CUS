// TableOrder.js
import React from "react";
import styles from "./TalkTable.module.css";
import mockDataAll from "../../../mockdata/mockAll.json";

const TableAllTalk = () => {
  return (
    <table className={styles.OrderTable}>
      <thead>
        <tr>
          <th>작성일</th>
          <th>업체명</th>
          <th>전화번호</th>
          <th>이메일</th>
          <th>유형</th>
          <th>문의상품</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {mockDataAll.map((item) => (
          <tr key={item.id}>
            <td>{item.gc_created_at}</td>
            <td>{item.gc_name}</td>
            <td>{item.gc_phone}</td>
            <td>{item.gc_email}</td>
            <td>{item.gc_type}</td>
            <td>{item.gc_product_id}</td>
            <td
              className={
                item.gc_status === "요청 대기"
                  ? styles.waiting
                  : item.gc_status === "처리 완료"
                  ? styles.completed
                  : ""
              }
            >
              {item.gc_status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAllTalk;
