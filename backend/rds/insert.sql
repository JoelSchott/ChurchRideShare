use church_ride_share;

insert into Churches values (
    "5b8c73d3-9e6a-4b8c-b44c-6637132ec60e", "Mosaic", "Missouri", "Rolla", "1600 Bridgeschool Rd", "65401", "Good church!", "png", "https://mosaicrolla.com/"
);
insert into Churches values (
    "d0f31d23-cd03-4d72-8d2e-934ccd980071", "Greentree", "Missouri", "Rolla", "800 Greentree Rd", "65401", "Great church!", "png", "https://greentreerolla.org/"
);
insert into Churches values (
    "ba227e8b-a40b-43fa-9ebe-c059ac10c27b", "Ridgeview", "Missouri", "Rolla", "806 Ridgeview Road", "65401", "Great view!", "png", "https://www.ridgecc.com/"
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
    "John The Baptist", "PutMeUnder"
);
insert into Users values (
    "Matthew", "TaxesTaxes"
);
insert into Users values (
    "Mark", "MyWords"
);
insert into Users values (
    "Luke", "IAmYourHeavenlyFather"
);
insert into Users values (
    "Paul", "BetterCallPaul"
);
insert into Users values (
    "James", "ConsiderItJoy"
);
insert into Users values (
    "Matthias", "CountMeIn"
);

insert into Admins values (
    "5b8c73d3-9e6a-4b8c-b44c-6637132ec60e", "John The Baptist"
);
insert into Admins values (
    "d0f31d23-cd03-4d72-8d2e-934ccd980071", "Matthew"
);
insert into Admins values (
    "ba227e8b-a40b-43fa-9ebe-c059ac10c27b", "Mark"
);

insert into Drivers values (
    "5b8c73d3-9e6a-4b8c-b44c-6637132ec60e", "Luke"
);
insert into Drivers values (
    "d0f31d23-cd03-4d72-8d2e-934ccd980071", "Luke"
);
insert into Drivers values (
    "ba227e8b-a40b-43fa-9ebe-c059ac10c27b", "Paul"
);

insert into RoleRequests values (
    "James", "d0f31d23-cd03-4d72-8d2e-934ccd980071", 0, "What good is it if one has no drive?"
);
insert into RoleRequests values (
    "Paul", "5b8c73d3-9e6a-4b8c-b44c-6637132ec60e", 1, "Can the worst of sinners be an admin?"
);

insert into RideRequests VALUES (
    "cbfb7439-9ced-477b-a5d2-084f1e755e14", null, 1, "Timothy", "Missouri", "Rolla", "123 The Way", "65401", "111222333", 
    "Take me to church please", "1dd17191-9f19-435e-8772-9850ae77e299", null
);
insert into RideRequests VALUES (
    "8ad9779c-1359-41f7-996b-b48e6baa7349", null, 3, "Hebrew Children", "Missouri", "Rolla", "100 Narrow Path", "65401", "123456789", 
    "Can we please come?", "36b1880c-790f-466a-87c5-8a08de4f2a3f", "Luke"
);
insert into RideRequests VALUES (
    "9bd85139-e3f3-4fb9-9e1f-3062401bfb6d", "Matthias", 1, "New Matt", "Missouri", "Rolla", "27 Your Rest", "65401", "999888777",
    "I would like to come too", "66c61054-a15b-4a33-a334-dd0f5d6e3480", null
);
