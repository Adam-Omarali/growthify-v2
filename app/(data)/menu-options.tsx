import { IconAdjustments, IconGauge, IconNotes, IconPresentationAnalytics } from "@tabler/icons";

export function sidebarOptions(){
    return [
        { label: 'Dashboard', icon: IconGauge },
        {
          label: 'Group Areas',
          icon: IconNotes,
          // links: [
            // { label: 'Overview', link: '/' },
            // { label: 'Forecasts', link: '/' },
            // { label: 'Outlook', link: '/' },
            // { label: 'Real time', link: '/' },
          // ],
          add: true
        },
        { label: 'Analytics', icon: IconPresentationAnalytics },
        { label: 'Settings', icon: IconAdjustments }
    ]
}