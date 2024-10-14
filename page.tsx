// import Link from "next/link"



//  export default function Home() {
//  return (
//      <div>
//          <h1 >Lets know how to link different pages</h1>
  
//      <Link className="mr-7 hover:text-red-900" href={"http://localhost:3000/aboutus"}>About Us </Link>
//      <Link className="mr-7 hover:text-red-900" href={"http://localhost:3000/contactus"}>Contact us </Link>
//      <Link className="mr-7 hover:text-red-900" href={"http://localhost:3000/privacypolicy"}>Privacy policy </Link>
// <br />
// <br />
//         <a href="https://www.youtube.com/channel/UCBwmMxybNva6P_5VmxjzwqA">
//                <button  className="flex mx-auto mt-20 text-white bg-grey-500">Visit my Profile</button>
//          </a>
//     </div>


//  );
// }

export default function Home() {
    return (
      <>
        {/* Below Code Is With CSS */}
        <div style={{ display: 'flex',justifyContent: 'space-between',  alignItems: 'center' }} >
        <img 
            src="data:image/jpeg;base64,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" alt="Profile Picture" style={{  width: '200px', height: '200px', borderRadius: '50%',  marginRight: '20px' }} 
          />
          <div style={{width: 'fit-content', height: '250px', margin: '40px', fontSize: '80px', fontWeight: 'bold'}}>
            Hello,
            <br />
            My self <span style={{ color: 'Yellow' }}
            >Bhunesh Kumar</span>
            <br />I am Next JS Developer
          </div>
          <div ></div>
        </div>
  
        {/* Below Code Is With Css */}
        <div style={{ display: 'flex',justifyContent: 'space-between',  alignItems: 'center' }}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9teff5JKoNXwm0wHAV_Ob_l2acPhy85NQ8w&s" alt="Profile Picture" style={{  width: '200px', height: '200px', borderRadius: '50%',  marginRight: '20px' }} 
          />
          
          <div style={{width: 'fit-content', height: '250px', margin: '40px', fontSize: '80px', fontWeight: 'bold'}}>
            Hello,
            <br />
            My self <span style={{ color: 'Green' }}
            >Dhart Rashtra</span>
            <br />I am Next JS Developer
          </div>
          <div className=""></div>
        </div>
      </>
    );
  }