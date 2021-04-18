import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Home/Dashboard/Dashboard';
import Book from './components/Book/Book';
import AddService from './components/AddService/AddService';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import Review from './components/Review/Review';
import AllOrders from './components/AllOrders/AllOrders';
import ManageService from './components/ManageService/ManageService';
import BookingList from './components/BookingList/BookingList';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/appointment"> 
         
        </Route>
        <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/review">
         <Review></Review>
          </Route>
          <Route path="/allorders">
         <AllOrders></AllOrders>
          </Route>
          <Route path="/addservice">
          <AddService></AddService>
          </Route>
          <Route path="/manageservice">
         <ManageService></ManageService>
          </Route>
          <Route path="/bookinglist">
         <BookingList></BookingList>
          </Route>
          <PrivateRoute path="/book/:serviceId">
             <Book></Book>
          </PrivateRoute>

        <Route path="/login">
           <Login></Login> 
          </Route>
      </Switch>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
