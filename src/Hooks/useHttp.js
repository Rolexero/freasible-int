import React, { useState, useCallback } from "react";
import { useQuery } from "react-query";


const useHttp = (requestConfig) => {
  const sendRequest = async() => {
    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      headers: requestConfig.headers ? requestConfig.headers : {},
    });
    const data = await response.json();
    return data;
  };

  const { data, status } = useQuery(["dataItems",requestConfig], sendRequest);

  return {
    data,
    status,
  };
};

export default useHttp;
