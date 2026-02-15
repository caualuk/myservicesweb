import EmployeesSection from "@/app/home/EmployeesSection/EmployeesSection"
import HeroSection from "@/app/home/HeroSection/HeroSection"
import Navbar from "@/app/components/Navbar/Navbar"
import WorkFlowsSection from "@/app/home/WorkFlows/WorkFlows"
import StatsSection from "@/app/home/StatsSection/StatsSection"
import Footer from "@/app/components/Footer/Footer"

export default function Home() {
    return (
        <>
        <header>
            <Navbar />
        </header>
        <HeroSection />
        <WorkFlowsSection />
        <EmployeesSection />
        <StatsSection />
        <Footer />
        </>
        
    )
}