import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';

// Framework
import FrameworkOverview from './pages/framework/FrameworkOverview';
import CareAsStrategy from './pages/framework/CareAsStrategy';
import FlourishingOrganization from './pages/framework/FlourishingOrganization';
import GenerativeOntology from './pages/framework/GenerativeOntology';

// The Work
import HowWeWork from './pages/the-work/HowWeWork';
import StrategicAdvisory from './pages/the-work/StrategicAdvisory';
import OrganizationalTransformation from './pages/the-work/OrganizationalTransformation';
import ChiefFlourishingOfficer from './pages/the-work/ChiefFlourishingOfficer';

// Initiatives
import InitiativesOverview from './pages/initiatives/InitiativesOverview';
import Benevolently from './pages/initiatives/Benevolently';
import Flourishingly from './pages/initiatives/Flourishingly';
import MasterTrainers from './pages/initiatives/MasterTrainers';

// Community
import MycelialNetwork from './pages/community/MycelialNetwork';
import Mastermind from './pages/community/Mastermind';
import EventsSalons from './pages/community/EventsSalons';

// Events
import HumanTechWeek from './pages/events/HumanTechWeek';

// Engage
import StartConversation from './pages/engage/StartConversation';
import ForOrganizations from './pages/engage/ForOrganizations';
import ForStartupsBuilders from './pages/engage/ForStartupsBuilders';
import ForResearchers from './pages/engage/ForResearchers';
import ForPractitioners from './pages/engage/ForPractitioners';
import ForFunders from './pages/engage/ForFunders';

// About
import About from './pages/about/About';
import Company from './pages/about/Company';
import Mission from './pages/about/Mission';
import Team from './pages/about/Team';
import Honorarium from './pages/about/Honorarium';

// Legal
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-tara-green/20 border-t-tara-green rounded-full animate-spin" />
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* Framework */}
        <Route path="/framework" element={<FrameworkOverview />} />
        <Route path="/framework/care-as-strategy" element={<CareAsStrategy />} />
        <Route path="/framework/flourishing-organization" element={<FlourishingOrganization />} />
        <Route path="/framework/generative-ontology" element={<GenerativeOntology />} />

        {/* The Work */}
        <Route path="/the-work" element={<HowWeWork />} />
        <Route path="/the-work/strategic-advisory" element={<StrategicAdvisory />} />
        <Route path="/the-work/organizational-transformation" element={<OrganizationalTransformation />} />
        <Route path="/the-work/chief-flourishing-officer" element={<ChiefFlourishingOfficer />} />

        {/* Initiatives */}
        <Route path="/initiatives" element={<InitiativesOverview />} />
        <Route path="/initiatives/benevolently" element={<Benevolently />} />
        <Route path="/initiatives/flourishingly" element={<Flourishingly />} />
        <Route path="/initiatives/master-trainers" element={<MasterTrainers />} />

        {/* Community */}
        <Route path="/community/mycelial-network" element={<MycelialNetwork />} />
        <Route path="/community/mastermind" element={<Mastermind />} />
        <Route path="/community/events-salons" element={<EventsSalons />} />

        {/* Events */}
        <Route path="/events/human-tech-week" element={<HumanTechWeek />} />

        {/* Engage */}
        <Route path="/engage/start-conversation" element={<StartConversation />} />
        <Route path="/engage/organizations" element={<ForOrganizations />} />
        <Route path="/engage/startups-builders" element={<ForStartupsBuilders />} />
        <Route path="/engage/researchers-scientists" element={<ForResearchers />} />
        <Route path="/engage/practitioners-facilitators" element={<ForPractitioners />} />
        <Route path="/engage/funders-capital-partners" element={<ForFunders />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/about/company" element={<Company />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/honorarium" element={<Honorarium />} />

        {/* Legal */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;