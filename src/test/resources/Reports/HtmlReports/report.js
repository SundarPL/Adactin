$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Adactin_Login_Page.feature");
formatter.feature({
  "name": "To validate the Adactin login Funtionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to fill username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "SSRajaPalani",
        "Sundar"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_fill_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_Click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin search hotel page with give the mandatory info to book the hotels",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin search hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter Loaction and hotel and Room Type and Numbers of rooms and Check in date and Check out date and Adult per room and Childern per room",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_enter_Loaction_and_hotel_and_Room_Type_and_Numbers_of_rooms_and_Check_in_date_and_Check_out_date_and_Adult_per_room_and_Childern_per_room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to Booking confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_Booking_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin select hotel page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin select hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the Select hotel",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_Select_hotel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to Book hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_Book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin Book hotel page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin Book hotel page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_Book_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter Firstname and Lastname and Billingaddress and Credit card no and Credit card type Expirydate and CVV Number",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Billing Address",
        "Credit card no",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "SSRAJA",
        "Palani",
        "123,Abc New St",
        "8945698745631112",
        "951"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_enter_Firstname_and_Lastname_and_Billingaddress_and_Credit_card_no_and_Credit_card_type_Expirydate_and_CVV_Number(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the BookNow button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactin_Login.user_click_the_BookNow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigating to BookingConfirm page",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_navigating_to_BookingConfirm_page()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinition.Adactin_Login.user_is_navigating_to_BookingConfirm_page(Adactin_Login.java:151)\r\n\tat ✽.User is navigating to BookingConfirm page(file:src/test/resources/features/Adactin_Login_Page.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Adactin Booking Cofirm page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has to be there in Adactin Booking Cofirm page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactin_Login.user_has_to_be_there_in_Adactin_Booking_Cofirm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User get the booking confirmation order no",
  "keyword": "When "
});
formatter.match({
  "location": "Adactin_Login.user_get_the_booking_confirmation_order_no()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is booking the room is done!!!",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactin_Login.user_is_booking_the_room_is_done()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});