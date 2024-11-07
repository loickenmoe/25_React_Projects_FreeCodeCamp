import React from 'react'
import Tabs from './tabs';
import './tabs.css';
import QRCodeGenerator from '../qr-code-generator';

function RandomComponent() {
    return (<h1>Some randon content</h1>)
}

function TabTest() {

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is the content for tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is the content for tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        },
        {
            label: 'QrCode',
            content: <QRCodeGenerator />
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
        
    }

  return (
    <Tabs tabsContent={tabs} onChange={handleChange} />
  )
}

export default TabTest;