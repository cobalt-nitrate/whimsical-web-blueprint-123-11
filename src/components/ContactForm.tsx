import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    phone: '',
    jobTitle: ''
  });

  const heading = "Ready to Transform Your Business with AI?";
  const description = "Connect with our team of AI experts to explore how our cutting-edge solutions can address your unique challenges and unlock new opportunities for innovation and growth.";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSfd4GsSwSVFA1Xv6tKVxcb5I1SW3y2H11dRAS1hNoV_DlcVBA/formResponse";
    const formDataToGoogleForm = new URLSearchParams();

    formDataToGoogleForm.append("entry.997349557", formData.name);
    formDataToGoogleForm.append("entry.1197879923", formData.email);
    formDataToGoogleForm.append("entry.248641685", formData.company);
    formDataToGoogleForm.append("entry.1986168981", formData.phone);
    formDataToGoogleForm.append("entry.1801593651", formData.jobTitle);
    formDataToGoogleForm.append("entry.582647937", formData.message);

    fetch(googleFormURL, {
      method: "POST",
      body: formDataToGoogleForm,
      mode: "no-cors",  // This prevents CORS errors
    })
    .then(() => {
      alert("Your message has been sent. We will get back to you soon!");
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        phone: '',
        jobTitle: ''
      });
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
              <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              <InputField label="Company" name="company" value={formData.company} onChange={handleChange} required />
              <InputField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required={false} />
            </div>
            
            <InputField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
            
            <div>
              <label className="block text-white mb-2 text-sm font-medium">Description</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300"
                placeholder="Tell us about your project or inquiry..."
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit"
                className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, name, type = "text", value, onChange, required }) => (
  <div>
    <label className="block text-white mb-2 text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-300"
      required={required}
    />
  </div>
);

export default ContactForm;
