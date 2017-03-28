import React from 'react';

import GettingStarted from './internal-components/GettingStarted';
import LeadSpace from './internal-components/LeadSpace';
import Nav from './internal-components/Nav';
import ToC from './internal-components/ToC';

import IconExamples from './components/IconExamples';
import HeaderExamples from './components/HeaderExamples';
import FooterExamples from './components/FooterExamples';
import JumbotronExamples from './components/JumbotronExamples';
import TabsExamples from './components/TabsExamples';
import CodeExamples from './components/CodeExamples';
import RadioGroupExamples from './components/RadioGroupExamples';
import ImagePickerExamples from './components/ImagePickerExamples';
import ButtonsGroupExamples from './components/ButtonsGroupExamples';
import AlertExamples from './components/AlertExamples';
import ArrowBoxExamples from './components/ArrowBoxExamples';
import ColorsExample from './components/ColorsExample';
import ModalExamples from './components/ModalExamples';
import TextInputExamples from './components/TextInputExamples';
import JsonLinkExamples from './components/JsonLinkExamples';
import JsonLinkInlineExamples from './components/JsonLinkInlineExamples';
import InputWithButtonExamples from './components/InputWithButtonExamples';
import BarExamples from './components/BarExamples';
import Icon from '../../src/components/Icon';
import Header from '../../src/components/Header';
import Jumbotron from '../../src/components/Jumbotron';
import Conversation from '../../src/components/Conversation';
import TextInput from '../../src/components/TextInput';
import Footer from '../../src/components/Footer';

export default function App() {
  return (
    <div>
      <Header
        mainBreadcrumbs="Service Name"
        mainBreadcrumbsUrl="someUrl"
        subBreadcrumbs="Demo Name"
        subBreadcrumbsUrl="someUrl"
        hasWordmark={false}
      />
      <Jumbotron
        serviceName="Tone Analyzer for Customer Engagement"
        repository="#"
        documentation="#"
        apiReference="#"
        startInBluemix="#"
        version="Beta"
        serviceIcon="images/service-icon.svg"
        description="Use the Tone Analyzer Customer Engagement model to monitor customer support conversations. Escalate customer conversations when they turn sour, or find opportunities to improve customer service scripts, dialogs, and customer journeys."
      />
      <div className="_container _container_large">
        <div className="content--session-container">
          <Conversation/>
        </div>
      </div>
      <Jumbotron
        serviceName="Next Up: Build your own app"
        repository="#"
        documentation="#"
        apiReference="#"
        startInBluemix="#"
        version="Beta"
        serviceIcon="images/service-icon.svg"
        description="Use Tone Analyzer to get started."
      />
      <Footer />
    </div>
  );
}
