// Import all components
import Background from './Backgrounds/index.js';
import ProfileCard from './Components/ProfileCard/ProfileCard.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Typography from './Components/Typography/Typography.jsx';
import Button from './Components/Button/Button.jsx';
import Icon from './Components/Icon/Icon.jsx';
import FlipCard from './Components/FlipCard/FlipCard.jsx';
import MeshyCard from './Components/MeshyCard/MeshyCard.jsx';
import AnimatedContent from './Animations/AnimatedContent/AnimatedContent.jsx';
import ScrollReveal from './TextAnimations/ScrollReveal/ScrollReveal.jsx';
import SplitText from './TextAnimations/SplitText/SplitText.jsx';

// Create Animation object
const Animation = {
  AnimatedContent,
  ScrollReveal,
  SplitText
};

// Export all components
export {
  Background,
  ProfileCard,
  Layout,
  Typography,
  Button,
  Icon,
  FlipCard,
  MeshyCard,
  Animation
}; 