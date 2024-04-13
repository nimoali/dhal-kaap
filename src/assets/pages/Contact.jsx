

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Header from "../component/Header";

function Contact() {


  return (
    <div>
    <div>
      <Header />
    </div>
      <div className="all_pgs">
        <h1 style={{ color: "rgb(27, 54, 86)" }} className="text-2xl font-bold mb-3 ">CONTACT US</h1>
        {/* <hr className="contact_hr" /> */}
        <p>
          Walaal nala soo xiriir waxaan waan ku sugu soo jawabeynaa sida ugu dhaqsiyaha badan 
        </p>
      </div>
      <div className="contact_parent">
        <div className="contact_part1">
          <h2 style={{ textTransform: "uppercase" }}> Contact information</h2>
          <br />
          <br />
          <p style={{ fontSize: "20px" }}>
            {" "}
            If you have any question or simply want to contact with us
            <br />
            <br />
          </p>
          <br />
          <br />
          
          <p style={{ fontSize: "20px"  }}>
          <BsFillTelephoneFill   /> +252 61222-333-00 
          </p>
          <br />
          <br />

          <p style={{ fontSize: "20px"  }} className="mr-6 w-[10%]">
            <MdEmail /> Dhulkaab@gmail.com
          </p>
        </div>
        <div className="contact_part2">
          <h2 style={{ textTransform: "uppercase" }}> Send message</h2>
          <br />

          <form>
            <label>First name</label> <br />
            <input
              type="text"
              placeholder=" first name"
              name="first"
           
            />
            <br />
            <br />
            <label>Last name</label> <br />
            <input
              type="text"
              placeholder=" last name"
              name="first"
            
            />
            <br />
            <br />
            <label>Email</label> <br />
            <input
              type="text"
              placeholder="@gmail.com.."
             
            />
            <br />
            <br />
            <label>Message</label> <br />
            <textarea
              type="text"
              placeholder=" commit..."
            
            />
            <br />
            <br />
            <button className="  bg-[#006400] px-8 py-1 rounded text-[#ffffff]" >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
