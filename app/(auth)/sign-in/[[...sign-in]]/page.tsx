"use client"
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  const showTermsAlert = () => {
    const termsText = `By using the NewPay Website or Services in any manner, you agree to be bound by these Terms of Service, as
well as the Incorporated Terms identified below (collectively, the "Terms"). If you do not agree to these Terms,
please refrain from using the NewPay Website or Services. If you are accepting these Terms on behalf of a
company, organization, government, or other legal entity, you represent and warrant that:
(a) You are authorized to do so,
(b) The entity agrees to be legally bound by these Terms, and
(c) Neither you nor the entity are barred from using the Services or accepting the Terms under the laws of the
applicable jurisdiction.`;

    alert(termsText);
  };

  return (
    <div>
      <SignIn />
      <div className="text-[14px] p-6">
        <label>
          <input type="checkbox" onClick={showTermsAlert} />
          <span style={{ marginLeft: "10px" }}>I agree to the Terms and Conditions</span>
        </label>
      </div>
    </div>
  );
}
