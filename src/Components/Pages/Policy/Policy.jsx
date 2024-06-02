import React from 'react';
import Layout from '../../Layout/Layout';
import headerImage from '../../../images/Header.png';
import FarmingGif from '../../../images/Gif/farming.gif';
import Goto from '../../Goto/Goto';
const PolicyPage = () => {
  return (
    <Layout>
      <div className="relative mb-4">
        <img src={FarmingGif} alt="Farming" className="lg:w-1/2 mt-1 sm:w-2/3 min-h-36 m-auto" />
        <div className="absolute top-1/2 text-center sm:rouded-full right-1/4  bg-white bg-opacity-50 rounded-full p-5 transform -translate-y-1/2 transition-all duration-500">
          <h1 className="text-3xl lg:text-6xl font-serif font-bold text-yellow-950">Privacy Policy</h1>
        </div>
      </div>
      <Goto />
      <div className="w-auto text-gray-700 font-serif bg-none m-3 ring-1 rounded-3xl p-5 ring-purple shadow-inner shadow-black ">

        <p className="mb-6">
          At Online Mandi, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our platform.
        </p>

        <h2 className="text-xl font-semibold mb-4">1. Information We Collect:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Personal Information:</strong> We may collect personal information such as your name, email address, contact number, and business details when you register an account or participate in auctions on our platform.
          </li>
          <li>
            <strong>Transaction Information:</strong> We collect information related to your transactions, including bids placed, products purchased, and payment details.
          </li>
          <li>
            <strong>Usage Information:</strong> We may collect information about your interactions with our platform, such as the pages visited, products viewed, and actions taken.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information:</h2>
        <p className="mb-6">
          - To facilitate auctions and transactions: We use the information you provide to enable bidding, complete transactions, and deliver purchased products.
          <br />
          - To improve our platform: We analyze user behavior and feedback to enhance the functionality and user experience of our platform.
          <br />
          - To communicate with you: We may use your contact information to send important updates, notifications, and promotional offers related to our services.
          <br />
          - To ensure compliance with our policies: We may use your information to enforce our Terms of Service and other policies governing the use of our platform.
        </p>

        {/* Add content for other sections similarly */}

        <h2 className="text-xl font-semibold mb-4">3. Information Sharing:</h2>
        <p className="mb-6">
          - We do not sell, trade, or rent your personal information to third parties for marketing purposes.
          <br />
          - We may share your information with trusted third-party service providers who assist us in operating our platform, processing payments, and delivering products.
          <br />
          - We may disclose your information in response to legal requests, court orders, or to protect our rights, property, or safety.
        </p>

        <h2 className="text-xl font-semibold mb-4">4. Data Security:</h2>
        <p className="mb-6">
          - We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
          <br />
          - We regularly review and update our security practices to ensure compliance with industry standards and best practices.
        </p>

        <h2 className="text-xl font-semibold mb-4">5. Your Choices:</h2>
        <p className="mb-6">
          - You have the right to access, update, or delete your personal information at any time by logging into your account settings.
          <br />
          - You may opt-out of receiving promotional communications from us by following the instructions provided in the communication.
        </p>

        <h2 className="text-xl font-semibold mb-4">6. Children's Privacy:</h2>
        <p className="mb-6">
          - Our platform is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children.
        </p>

        <h2 className="text-xl font-semibold mb-4">7. Updates to this Privacy Policy:</h2>
        <p className="mb-6">
          - We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our platform.
        </p>

        <h2 className="text-xl font-semibold mb-4">Terms & Conditions:</h2>
        <p className="mb-6">
          By using Online Mandi's services, you agree to the following terms and conditions:
        </p>

        <h3 className="text-lg font-semibold mb-2">Account Registration:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>You must provide accurate and complete information when registering for an account on our platform.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Terms & Conditions for Auctions:</h3>
        <p className="mb-6">
          By participating in auctions on our platform, you agree to abide by the terms and conditions outlined below:
        </p>

        <h4 className="text-base font-semibold mb-2">1. Bid Submission:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Once a bid is submitted, it cannot be deleted or revoked under any circumstances.</li>
          <li>Bids are considered final and binding, and the bidder is obligated to honor the bid amount if selected as the winner.</li>
        </ul>

        <h4 className="text-base font-semibold mb-2">2. Winning Bidder Obligations:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>The winning bidder is obligated to purchase the commodity at the bid price, irrespective of market conditions.</li>
          <li>Failure to fulfill the purchase obligation may result in penalties, account suspension, or legal action.</li>
        </ul>

        <h4 className="text-base font-semibold mb-2">3. Penalties for Non-Compliance:</h4>
        <ul className="list-disc pl-6 mb-4">
          <li>Failure to comply with the terms of the auction may result in penalties imposed by Online Mandi.</li>
          <li>Penalties may include financial penalties, account suspension, or legal action.</li>
        </ul>

        <h4 className="text-base font-semibold mb-2">4. Legal Action:</h4>
        <ul className="list-disc pl-6 mb-6">
          <li>Online Mandi reserves the right to pursue legal action against bidders who fail to comply with the terms of the auction.</li>
          <li>Legal action may include but is not limited to, filing a lawsuit to enforce the purchase obligation and recover damages.</li>
        </ul>

        <p className="mt-8">Last updated: 22/04/2024</p>

      </div>
    </Layout>
  );
};

export default PolicyPage;
