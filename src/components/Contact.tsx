import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { MdPhoneCallback } from "react-icons/md";


const Contact = () => {
  return (
    <div id="contact" className="pt-32 container">
        <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
                <h2 className="text-5xl" data-aos="zoom-in-up">"Let's stay connected"</h2>

                <p className="text-gray-400 text-[18px] pt-2" data-aos="zoom-in-up">
                "Feel free to reach out—give me a call, drop a message!"
                </p>
                <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                <MdMarkEmailRead size={30} />khanfarwa392@gmail.com
            </div>
            <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                <MdPhoneCallback size={30} />(+92) 323960772
            </div>
        </div>
        </div>
    </div>
  );
};

export default Contact;