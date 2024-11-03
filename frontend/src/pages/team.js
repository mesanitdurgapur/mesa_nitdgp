import React from "react";
import "../pages/team.css";
import ProfileCard from "../components/teamcard";

// Dynamically importing all images from a specific folder
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return null;
  });
  return images;
};

// Importing all images from the "team" folder
const images = importAll(require.context('../assets/team', false, /\.(png|jpe?g|svg)$/));

export default function Team() {
  const officeBeareres = [
    { name: "Tushar", role: "president", image: "tushar.jpeg", facebook: "#", instagram: "#", linkedin: "#" },
    { name: "Mayank", role: "Vice president", image: "mayank.jpeg", facebook: "#", instagram: "#", linkedin: "#"  },
    { name: "Dharma Teja", role: "general secretary", image: "teja.jpeg", facebook: "#", instagram: "#", linkedin: "#"  },
    { name: "Sanvie", role: "Treasurer", image: "sanvie.jpeg", facebook: "#", instagram: "#", linkedin: "#"  },
    { name: "Liza Gupta", role: "convenor", image: "liza.jpeg", facebook: "#", instagram: "https://www.instagram.com/liza_gupta22369/profilecard/?igsh=NW9scWZxdDdpc3N1", linkedin: "https://www.linkedin.com/in/liza-gupta-7a1ab5223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Nithish", role: "Rnd head", image: "nithish.jpeg", facebook: "#", instagram: "#", linkedin: "#" },
    { name: "Siddharth Khandelwal", role: "publicity head", image: "sid.jpeg", facebook: "https://www.facebook.com/siddharth.khandelwal.75286", instagram: "https://www.instagram.com/siddharthkhandelwal7878/", linkedin: "https://www.linkedin.com/in/siddharth-khandelwal-b54340225/"  },
    { name: "Karunya Spoorthy", role: "logistics head", image: "karunya.jpeg", facebook: "#", instagram: "https://www.instagram.com/karunya__29?igsh=dXFveW15NmRidmhk&utm_source=qr", linkedin: "https://www.linkedin.com/in/v-karunya-spoorthy-1b6074251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"},
    { name: "Shriya", role: "events head", image: "shriya.jpeg", facebook: "#", instagram: "#", linkedin: "#" },
    { name: "Tamoghna", role: "tech head", image: "Tamoghna.jpeg", facebook: "https://www.facebook.com/profile.php?id=100076938982610&mibextid=ZbWKwL", instagram: "https://www.instagram.com/muggle_mechanic/profilecard/?igsh=MWN2cnFubGQ2eWFpeQ==", linkedin: "https://www.linkedin.com/in/tamoghna-dutta-132672231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Archya", role: "content head", image: "archya.jpeg", facebook: "https://www.facebook.com/archya7?mibextid=ZbWKwL", instagram: "https://www.instagram.com/archyaroy/profilecard/?igsh=d2NyNDF0cWcwcW5s", linkedin: "https://www.linkedin.com/in/archya-roy-9a4663288?originalSubdomain=in" },
    { name: "Ajay", role: "senior coordinator", image: "ajay.jpeg", facebook: "#", instagram: "#", linkedin: "#" },
    { name: "Aman Kumar Singh", role: "senior coordinator", image: "aman4.jpeg", facebook: "#", instagram: "https://www.instagram.com/m_in_onepercent/profilecard/?igsh=enA4OHJlZXE2cnRn", linkedin: "https://www.linkedin.com/in/aman-singh-103489257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Sumit", role: "senior coordinator", image: "sumit.jpeg", facebook: "#", instagram: "#", linkedin: "#" },
    { name: "Arunava Biswas", role: "senior coordinator", image: "arunava.jpeg", facebook: "#", instagram: "https://www.instagram.com/__arunava___/profilecard/?igsh=Y3JieGh6Nm53eXE=", linkedin: "https://www.linkedin.com/in/arunava-biswas-9a9743166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Pavan", role: "senior coordinator", image: "pavan.jpeg", facebook: "#", instagram: "#", linkedin: "#" },
    // Add more team members as needed
  ];
  const thirdYears=[
    { name: "Divya", role: "content writer", image: "divya.jpeg", facebook: "https://www.facebook.com/share/19f7t5KcL5/", instagram: "https://www.instagram.com/_._divyyaaa._/profilecard/?igsh=MmxucjlhazY1MW9i", linkedin: "https://www.linkedin.com/in/divya-dandasi-b38352295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Krishna Bhargavi", role: "content writer", image: "bhargavi.jpeg", facebook: "#", instagram: "https://www.instagram.com/vibhaaa.0503/profilecard/?igsh=OHl6MThheGVrd3gw", linkedin: "https://www.linkedin.com/in/bhargavi-palla-542ba3265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Kiranmai", role: "content writer", image: "kiranmai.jpeg", facebook: "https://www.facebook.com/profile.php?id=100095100829391", instagram: "https://www.instagram.com/__.k.i.r.a.n.m.a.i.__/profilecard/?igsh=MWt1cWtybWN4YzR5cA==", linkedin: "https://www.linkedin.com/in/kiranmai-perada-a606b226a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Vandana", role: "content writer", image: " Vandana.jpeg", facebook: "#", instagram: "https://www.instagram.com/ruvayu111?igsh=d3prYzFmZjAxaGJv", linkedin: "https://www.linkedin.com/in/vandana-saraogi-356717258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Anish", role: "cad / catia", image: "anish.jpeg", facebook: "#", instagram: "https://www.instagram.com/anishkalita47?igsh=cnllY3c1MGQ1dDVs", linkedin: "https://www.linkedin.com/in/anish-kalita-12749526b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Radha Krishna", role: "event manager", image: "radhakrishna.jpeg", facebook: "#", instagram: "https://www.instagram.com/myself_mr._radha_krishna_/profilecard/?igsh=MW81Z2NpM2FlcDRqNg==", linkedin: "https://www.linkedin.com/in/illuri-radha-krishna-chowdary-3a959a261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Snehasis", role: "event manager", image: "snehasis.jpeg", facebook: "https://www.facebook.com/profile.php?id=61550006512654&mibextid=ZbWKwL", instagram: "https://www.instagram.com/_snehashis.s/profilecard/?igsh=MTlscTAybXc3bzUwaQ==", linkedin: "https://www.linkedin.com/in/snehashis-sha-06833726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Sai Krishna", role: "graphic designer", image: "team.jpeg", facebook: "https://www.facebook.com/saikrishna.gaddam.908", instagram: "https://www.instagram.com/saiprince_55?igsh=Y2w3NGZzMWh5Yzh3", linkedin: "https://www.linkedin.com/in/gaddam-saikrishna" },
    { name: "Tanmay", role: "graphic designer", image: "tanmay.jpeg", facebook: "#", instagram: "https://www.instagram.com/t.a.n.m.a.y._.j.a.i.s.w.a.l/profilecard/?igsh=cDVuYmVoeHdkc2Nt", linkedin: "https://www.linkedin.com/in/tanmay-bandhu-jaiswal-552b31229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Chethan mali", role: "video editor", image: "mali.jpeg", facebook: "https://www.facebook.com/people/Chetan-Mali/", instagram: "https://www.instagram.com/chetanmali2004/", linkedin: "https://www.linkedin.com/in/chetan-mali-69037826a/" },
    { name: "Aman", role: "web developer", image: "aman.jpeg", facebook: "#", instagram: "https://www.instagram.com/aman_harkare/profilecard/?igsh=MXcyZGV5ZmdvN3AwbQ==", linkedin: "https://www.linkedin.com/in/aman-harkare?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    
  ]

  return (
    <div style={{backgroundColor: "#F5F5F5"}}>
      <div className="container-fluid" style={{backgroundColor: "#F5F5F5"}}>
        <h1>office <span className="highlights">bearers</span></h1>
      </div>
      <div className="team-box">
        <div className="profile-container">
          {officeBeareres.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              image={images[member.image]} // Access image dynamically
              facebook={member.facebook}
              instagram={member.instagram}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <h1>3rd <span className="highlights">years</span></h1>
      </div>
      <div className="team-box">
        <div className="profile-container">
          {thirdYears.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              image={images[member.image]} // Access image dynamically
              facebook={member.facebook}
              instagram={member.instagram}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
