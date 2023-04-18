use church_ride_share;

insert into Churches values (
    "5b8c73d3-9e6a-4b8c-b44c-6637132ec60e", "Mosaic", "MO", "Rolla", "1600 Bridgeschool Rd", "65401", "Good church!", "png", "https://mosaicrolla.com/"
);
insert into Churches values (
    "d0f31d23-cd03-4d72-8d2e-934ccd980071", "Greentree", "MO", "Rolla", "800 Greentree Rd", "65401", "Great church!", "png", "https://greentreerolla.org/"
);
insert into Churches values (
    "ba227e8b-a40b-43fa-9ebe-c059ac10c27b", "Ridgeview", "MO", "Rolla", "806 Ridgeview Road", "65401", "Great view!", "png", "https://www.ridgecc.com/"
);

insert into Services values (
    "ba72a678-21d8-47e1-8661-5135ffec3a4e", "5b8c73d3-9e6a-4b8c-b44c-6637132ec60e", 540, "Early Service"
);
insert into Services values (
    "36b1880c-790f-466a-87c5-8a08de4f2a3f", "5b8c73d3-9e6a-4b8c-b44c-6637132ec60e", 690, "Late Service"
);
insert into Services values (
    "1dd17191-9f19-435e-8772-9850ae77e299", "d0f31d23-cd03-4d72-8d2e-934ccd980071", 480, "Classic Worship"
);
insert into Services values (
    "66c61054-a15b-4a33-a334-dd0f5d6e3480", "d0f31d23-cd03-4d72-8d2e-934ccd980071", 555, "Contemporary Worship"
);
insert into Services values (
    "2d240de8-0cbd-47ad-8369-7ef417150d23", "d0f31d23-cd03-4d72-8d2e-934ccd980071", 645, "Contemporary Worship"
);
insert into Services values (
    "321effc5-0ab1-4e60-89b5-bb0eed75fa0a", "ba227e8b-a40b-43fa-9ebe-c059ac10c27b", 540, "Worship Service"
);
insert into Services values (
    "4b9b3b5a-19b2-4853-affa-93384e355c6c", "ba227e8b-a40b-43fa-9ebe-c059ac10c27b", 630, "Worship Service"
);

insert into Users values (
    "john", "John", "Baptist", "123456789"
);
insert into Users values (
    "matt", "Matthew", "Tax Collector", "111222333"
);
insert into Users values (
    "mark", "Mark", "Disciple", "444555666"
);
insert into Users values (
    "luke", "Luke", "Skywalker", "777888999"
);
insert into Users values (
    "paul", "Paul", "Apostle", "987654321"
);
insert into Users values (
    "james", "James", "Brother", "123123123"
);
insert into Users values (
    "matt2", "Matthias", "Latecomer", "456456456"
);
insert into Users values (
    "tim", "Timothy", "Child", "789789789"
);

insert into Admins values (
    "5b8c73d3-9e6a-4b8c-b44c-6637132ec60e", "john"
);
insert into Admins values (
    "d0f31d23-cd03-4d72-8d2e-934ccd980071", "matt"
);
insert into Admins values (
    "ba227e8b-a40b-43fa-9ebe-c059ac10c27b", "mark"
);

insert into Drivers values (
    "5b8c73d3-9e6a-4b8c-b44c-6637132ec60e", "luke"
);
insert into Drivers values (
    "d0f31d23-cd03-4d72-8d2e-934ccd980071", "luke"
);
insert into Drivers values (
    "ba227e8b-a40b-43fa-9ebe-c059ac10c27b", "paul"
);

insert into DriverRequests values (
    "james", "d0f31d23-cd03-4d72-8d2e-934ccd980071", "What good is it if one has no drive?"
);
insert into AdminRequests values (
    "paul", "5b8c73d3-9e6a-4b8c-b44c-6637132ec60e", "Can the worst of sinners be an admin?"
);

insert into UserRideRequests values (
    "cbfb7439-9ced-477b-a5d2-084f1e755e14", "tim", 1, "MO", "Rolla", "123 The Way", "65401", 
    "Take me to church please", "1dd17191-9f19-435e-8772-9850ae77e299", null, '2023-02-14 08:30:12', null
);
insert into UserRideRequests values (
    "9bd85139-e3f3-4fb9-9e1f-3062401bfb6d", "matt2", 2, "MO", "Rolla", "27 Your Rest", "65401",
    "I would like to come too", "66c61054-a15b-4a33-a334-dd0f5d6e3480", "luke", '2023-01-09 22:12:00', '2023-01-10 04:10:10'
);
insert into GuestRideRequests values (
    "31995d4c-d6da-464a-b5a5-c9b063c73fe6", "John", "Piper", "987987987", 1, "MO", "Rolla", "222 By Enjoying", "65401",
    "It would be so much fun", "4b9b3b5a-19b2-4853-affa-93384e355c6c", null, "2023-01-19 20:55:45", null
);
insert into GuestRideRequests values (
    "8ad9779c-1359-41f7-996b-b48e6baa7349", "Hebrew", "Children", "321321321", 3, "MO", "Rolla", "100 Narrow Path", "65401",
    "Can we please come?", "36b1880c-790f-466a-87c5-8a08de4f2a3f", "luke", "2023-03-01 10:01:12", "2023-03-02 08:25:15"
);

