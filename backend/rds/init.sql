drop database if exists church_ride_share;
create database church_ride_share;
use church_ride_share;

create table Churches (
    id char(36) primary key,
    name varchar(80) not null,
    state char(2) not null,
    city varchar(80) not null,
    street varchar(80) not null,
    zipCode char(5) not null,
    description varchar(1024),
    imageExtension varchar(10),
    website varchar(200)
);

create table Services (
    id char(36) primary key,
    churchId char(36) not null references Churches(id),
    startTime integer not null,
    description varchar(1024)
);

create table Users (
    username varchar(80) primary key,
    firstName varchar(80) not null,
    lastName varchar(80) not null,
    phoneNumber char(9) not null
);

create table Drivers (
    churchId char(36) references Churches(id),
    username varchar(80) references Users(username),
    primary key (churchId, username)
);

create table Admins (
    churchId char(36) references Churches(id),
    username varchar(80) references Users(username),
    primary key (churchId, username)
);

create table Riders (
    username varchar(80) references Users(username),
    personCount integer not null,
    state char(2) not null,
    city varchar(80) not null,
    street varchar(80) not null,
    zipCode char(5) not null,
    description varchar(1024),
    primary key (username)
);

create table UserRideRequests (
    id char(36) primary key,
    username varchar(80) references Riders(username),
    serviceId char(36) not null references Services(id),
    acceptedBy varchar(80) references Users(username),
    requestTime datetime not null,
    acceptTime datetime
);

create table GuestRideRequests (
    id char(36) primary key,
    firstName varchar(80) not null,
    lastName varchar(80) not null,
    phoneNumber char(9) not null,
    personCount integer not null,
    state char(2) not null,
    city varchar(80) not null,
    street varchar(80) not null,
    zipCode char(5) not null,
    description varchar(1024),
    serviceId char(36) not null references Services(id),
    acceptedBy varchar(80) references Users(username),
    requestTime datetime not null,
    acceptTime datetime
);

create table AdminRequests (
    username varchar(80) references Users(username),
    churchId char(36) references Churches(id),
    description varchar(1024),
    primary key (username, churchId)
);

create table DriverRequests (
    username varchar(80) references Users(username),
    churchId char(36) references Churches(id),
    description varchar(1024),
    primary key (username, churchId)
);
