import { useSearchParams } from 'react-router-dom'
import {useGetDashboardQuery, useGetMyCoursesQuery} from '@/shared/api/courseApi'
import { useGetUserStatisticsQuery } from '@/shared/api/statisticsApi'
import { WelcomeBackSection } from '@/widgets/WelcomeBackSection'
import { DashboardTabNavigation } from '@/widgets/DashboardTabNavigation'
import { Footer } from '@/widgets/Footer'
import { DashboardOverview } from './tabs/DashboardOverview'
import { MyCoursesTab } from './tabs/MyCoursesTab'
import { CatalogTab } from './tabs/CatalogTab'
import { StatisticsTab } from './tabs/StatisticsTab'
import { SettingsTab } from './tabs/SettingsTab'
import { motion, AnimatePresence } from 'framer-motion'
import {useEffect} from "react";

type DashboardTab = 'overview' | 'my-courses' | 'catalog' | 'stats' | 'settings'

export const DashboardPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const activeTab = (searchParams.get('tab') as DashboardTab) || 'overview'

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [activeTab])

    // Загружаем данные dashboard всегда
    const { data: dashboard, error: dashboardError } = useGetDashboardQuery()

    const {data: myCourses, error} = useGetMyCoursesQuery()

    // Загружаем статистику только когда нужна
    const { data: statistics, error: statsError } = useGetUserStatisticsQuery(undefined, {
        skip: activeTab !== 'stats'
    })

    const handleTabChange = (tab: DashboardTab) => {
        setSearchParams({ tab })
    }

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'overview':
                return <DashboardOverview dashboard={dashboard} error={dashboardError} />
            case 'my-courses':
                return <MyCoursesTab myCourses={myCourses} error={error} />
            case 'catalog':
                return <CatalogTab dashboard={dashboard} error={dashboardError} />
            case 'stats':
                return <StatisticsTab statistics={statistics} error={statsError} />
            case 'settings':
                return <SettingsTab />
            default:
                return <DashboardOverview dashboard={dashboard} error={dashboardError} />
        }
    }

    return (
        <div className="page-wrapper">
            <WelcomeBackSection />

            <section className="section home-premium-section">
                <div className="w-layout-blockcontainer container-default w-container">
                    <div className="w-layout-grid grid-2-columns chapters-grid---home-premium-page" style={{ gridTemplateColumns: '1fr auto' }}>
                        {/* Левая колонка - контент вкладок с белым фоном */}
                        <div
                            id="w-node-_95ddbba0-9678-167b-678d-d86ffb290ed1-ad098e68"
                            data-w-id="95ddbba0-9678-167b-678d-d86ffb290ed1"
                            style={{
                                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                opacity: 0
                            }}
                        >
                            {/* Белый фон для контента */}
                            <div className="card" style={{
                                padding: '32px',
                                minHeight: '400px',
                                background: 'white'
                            }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    >
                                        {renderActiveTab()}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Правая колонка - навигация (sticky) */}
                        <div
                            id="w-node-_98def917-6dd7-0977-a532-f2abee2ed215-ad098e68"
                            data-w-id="98def917-6dd7-0977-a532-f2abee2ed215"
                            style={{
                                WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                msTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                                opacity: 0,
                                minWidth: '300px'
                            }}
                            className="card chapters-side-card"

                        >
                            <div className="position-sticky" style={{ top: '24px' }}>
                                <DashboardTabNavigation
                                    activeTab={activeTab}
                                    onTabChange={handleTabChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer variant="full" />
        </div>
    )
}