import HeroComponent from "./../../components/sections/hero/heroComponent";
import FeatureComponent from "./../../components/sections/feature/featureComponent";
import PortfolioComponent from "./../../components/sections/portfoliocomponent/portfolioComponent";
import CallToActionComponent from "./../../components/sections/callToAction/callToActionComponent";
import TestimonialsComponent from "./../../components/sections/testimonials/testimonialsComponent";
import ContactComponent from "./../../components/sections/contact/contactComponent";

export default function LandingPage() {
    return (
        <>
            <HeroComponent />
            <FeatureComponent />
            <PortfolioComponent />
            <CallToActionComponent />
            <TestimonialsComponent />
            <ContactComponent />
        </>
    );
}
