import "./experience.css";

export default function Experience() {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="experience-container">
        <div className="experience-item">
          <h3>Full Stack Developer (Internship)</h3>
          <p>March 2024 - July 2024</p>
          <p>Jever, Germany</p>
          <ul>
            <li>
              <p className="experience-title-list">
                Development and Maintenance of E-Commerce Application Ecosystem
                for Restaurants:
              </p>
              <ul>
                <li>
                  Client Application: Enables customers to place online orders
                  quickly and easily.
                </li>
                <li>
                  Kitchen Application: Allows kitchen staff to receive and
                  manage orders in real-time.
                </li>
                <li>
                  CRUD Application: Comprehensive system management (products,
                  users, orders, etc.) without programming knowledge.
                </li>
                <li>
                  Backend Application: Central API and server logic developed in
                  PHP.
                </li>
              </ul>
            </li>
            <li>
              <p className="experience-title-list">
                Chat Backend App Development and Testing:
              </p>
              <ul>
                <li>
                  Developed and tested a chat backend application with PHP.
                </li>
                <li>Created the Entity-Relation map for the backend.</li>
                <li>Developed a mail template using PHPMailer.</li>
              </ul>
            </li>
            <li>
              <p className="experience-title-list">Additional Tasks:</p>
              <ul>
                <li>
                  Implemented frontend using Next.js and Tailwind CSS for
                  modern, responsive, and optimized user interfaces.
                </li>
                <li>
                  Developed and maintained the backend in PHP for efficient and
                  secure performance.
                </li>
                <li>
                  Created solutions with Raspberry Pi, including a script to
                  automatically print receipts.
                </li>
                <li>
                  Collaborated with design and marketing teams to align
                  application features with business goals and customer needs.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
