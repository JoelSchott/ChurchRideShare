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
    description varchar(1024) not null
);