// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Layout from './Layout';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../api/authSlice";
import TransactionsList from '../components/dashboard/TransactionsList';

const TransactionPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (user && user.role !== "admin") {
      navigate("/lands");
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <div className="p-6 mt-16 md:ml-[250px]">
        <TransactionsList />
      </div>
    </Layout>
  );
};

export default TransactionPage;
