type DashboardTab = 'overview' | 'my-courses' | 'catalog' | 'stats' | 'settings'

interface DashboardTabNavigationProps {
    activeTab: DashboardTab
    onTabChange: (tab: DashboardTab) => void
}

const tabs: { id: DashboardTab; label: string; icon: string, activeIcon: string }[] = [
    { id: 'overview', label: 'Dashboard', icon: '/assets/webflow/images/dashboard_gray.svg', activeIcon: '/assets/webflow/images/dashboard_black.svg' },
    { id: 'my-courses', label: 'My Courses', icon: '/assets/webflow/images/my_courses_gray.svg', activeIcon: '/assets/webflow/images/my_courses_black.svg' },
    { id: 'catalog', label: 'Other Courses', icon: '/assets/webflow/images/other_courses_gray.svg', activeIcon: '/assets/webflow/images/other_courses_black.svg' },
    { id: 'stats', label: 'Statistics', icon: '/assets/webflow/images/stats_gray.svg', activeIcon: '/assets/webflow/images/stats_black.svg' },
    { id: 'settings', label: 'Settings', icon: '/assets/webflow/images/settings_gray.svg', activeIcon: '/assets/webflow/images/settings_black.svg' },
]

export const DashboardTabNavigation = ({ activeTab, onTabChange }: DashboardTabNavigationProps) => {
    return (
        <>
            <h2 className="display-4">Dashboard</h2>
            <div className="mg-top-32px">
                <div className="w-layout-grid grid-1-column gap-row-0px">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`chapter-category-v1-wrapper w-inline-block ${
                                index === 0 ? 'first' : ''
                            } ${
                                index === tabs.length - 1 ? 'last' : ''
                            } ${
                                activeTab === tab.id ? 'w--current' : ''
                            }`}
                            style={{
                                border: 'none',
                                background: 'none',
                                width: '100%',
                                textAlign: 'left',
                                cursor: 'pointer'
                            }}
                        >
                            <div className="chapter-category-v1">
                                <div style={{ marginRight: '8px' }}>
                                    <img src={activeTab === tab.id ? tab.activeIcon : tab.icon} alt={tab.icon} style={{ width: '24px' , height: '24px' }} />
                                </div>
                                <div className="display-2">{tab.label}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}