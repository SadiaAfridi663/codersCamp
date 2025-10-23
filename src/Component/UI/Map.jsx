export default function LocationMap() {
  return (
    <div className="rounded-xl place-items-center py-5 overflow-hidden shadow-md ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.606858230757!2d71.56429377563094!3d34.05661601985879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9170051044cb9%3A0xc6743dec1361c0b8!2sBitCoderLabs%20Pvt%20Limited%20Software%20Technology%20Park%20Peshawar!5e0!3m2!1sen!2s!4v1729500000000!5m2!1sen!2s"
        width="90%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl bg-gray-200"
      ></iframe>
    </div>
  );
}
