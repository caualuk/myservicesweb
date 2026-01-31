import EmployeesSection from "@/app/components/EmployeesSection/EmployeesSection"
import HeroSection from "@/app/components/HeroSection/HeroSection"
import Navbar from "@/app/components/Navbar/Navbar"
import WorkFlowsSection from "@/app/components/WorkFlows/WorkFlows"
import StatsSection from "@/app/components/StatsSection/StatsSection"

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
        </>
        
    )
}