import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" mb-4">
      <button
        title="faqs button"
        className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex justify-between items-center rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span> {question}</span>
        <span className="text-xl">{isOpen ? "😍" : "😞"}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white border border-gray-200 rounded-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function Faq() {
  const faqData = [
    {
      question: "How does Ente ensure the security of my photos?",
      answer:
        "Ente is end-to-end encrypted. Our open-source apps have been externally audited by expert cryptographers who have certified that your photos are only visible to you. In addition to this, we store 3 copies of your data, in 3 different locations -Amsterdam, Frankfurt and Paris. The data center in Paris is in a fallout shelter 25m under the ground. The one in Frankfurt uses compliance locks to stay immune to ransomeware attacks. All of these systems are regularly audited.",
    },
    {
      question: "Can I transfer my photos from Google or Apple?",
      answer:
        "Yes! We have a simple migration process from both Google and Apple. Just takeout your data, and drop it into our Desktop app and you are set!",
    },
    {
      question: "Does Ente have an app for my device?",
      answer:
        "Ente has apps for Android, iOS, Web, Mac, Linux and Windows. All of these apps are open-source, and automatically backup your photos in the background.We also have a Command Line Interface for those who wish to run Ente on their Server.",
    },
    {
      question: "How can I share my photos with end-to-end encyption?",
      answer:
        "If your friend is on Ente, you can add them as a viewer or a collaborator to your album using any of our apps. They can view your photos, and even add their own photos to your albums, end-to-end encrypted. If your friend is not on Ente, you can share a link to your album with them. They can view your photos on a browser, without installing the app or needing an account. You can also allow them to add photos via these links. Even these uploads are end-to-end encrypted.",
    },
    {
      question: "Can I share my subscription with family and friends?",
      answer:
        "You can add upto 5 family members and share your available storage space with them at no extra cost. Each member will get their own private space, and can only access their own photos. We also have a Referral Program, where you can get 10 GB of free storage for every paid customer you refer. You can share your referral code with your friencs, and they will receive an extra 10 GB as well.",
    },
    {
      question: 'What does "Ente" mean?',
      answer:
        '"Ente" (pronounced "entay") means "mine" in Malayalam. "Ente" also means a "duck" in German. Hence the little Ducky - an evangelist of privacy, making it easy to own our memories!',
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
        .
      </div>
    </div>
  );
}
