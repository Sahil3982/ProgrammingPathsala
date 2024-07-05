import React from "react";
import clientlogo from "../assets/clientlogo.svg";
import ClientCard from "./ClientCard";
import memberimg from "../assets/memberimg.svg";
import clubsimg from "../assets/clubsimg.svg";
import nationimg from "../assets/nationimg.svg";
import mylogo from "../assets/mylogo.svg";

const Ourclient = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold mb-2">Our Clients</h1>
        <center>We have been working with some Fortune 500+ clients</center>
        <center className="p-2">
          <img src={clientlogo} />
        </center>
        <h1 className="text-center text-3xl font-bold mb-2">
          {" "}
          Manage your entire community <div>in a single system</div>
        </h1>
        <center>Who is Nextcent suitable for?</center>
        <div className="flex flex-wrap justify-around m-10">
          <ClientCard
            img={memberimg}
            heading="Membership Organisations"
            para="Our membership management software provides full automation of membership renewals and payments"
          />
          <ClientCard
            img={nationimg}
            heading="National Associations"
            para="Our membership management software provides full automation of membership renewals and payments"
          />
          <ClientCard
            img={clubsimg}
            heading="Clubs And Groups"
            para="Our membership management software provides full automation of membership renewals and payments"
          />
        </div>
      </div>

      <div className="flex justify-between items-center px-16">
        <div className="size-96">
          <img className="size-96" src={mylogo}  s/>
        </div>
        <div>
          <b className="text-4xl">
            The unseen of spending three <p>years at Pixelgrade</p>
          </b>
          <p className="py-6 align-middle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet <br></br>justo ipsum. Sed accumsan quam vitae est varius fringilla.
            tristique iaculis. <br></br>Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, <br></br>aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-green p-2 px-8 rounded text-white hover:scale-105 hover:transition-transform">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default Ourclient;
