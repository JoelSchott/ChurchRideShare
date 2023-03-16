drop database if exists church_ride_share;
create database church_ride_share;
use church_ride_share;

create table Churches (
    id char(36) primary key,
    name varchar(80) not null,
    state varchar(80) not null,
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
    password varchar(1024) not null
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

create table RideRequests (
    id char(36) primary key,
    username varchar(80) references Users(username),
    personCount integer not null,
    name varchar(80) not null,
    state varchar(80) not null,
    city varchar(80) not null,
    street varchar(80) not null,
    zipCode char(5) not null,
    phoneNumber char(9) not null,
    description varchar(1024),
    serviceId char(36) not null references Services(id),
    acceptedBy varchar(80) references Users(username)
);

create table RoleRequests (
    username varchar(80) references Users(username),
    churchId char(36) references Churches(id),
    role integer,
    description varchar(1024),
    primary key (username, churchId, role)
);
