'use client'

import './Price.scss';
import { useState } from 'react';

import { Star, PlanFeatureIcon } from '../UI/svg';

import ButtonLink from '@/src/shared/data/mainPageText';
import Link from 'next/link';

const Price = () => {
    const [active, setActive] = useState(false);
    return (
        <div className="price">
            <div className="price__toggle">
                <p className="price__toggle-text">Premium Plans</p>
                <button className={`price__switch ${active ? 'price__switch--active' : ''}`} onClick={() => setActive(!active)}>
                    <span className={`price__switch-circle ${active ? 'price__switch-circle--active' : ''}`}></span>
                </button>
                <p className="price__toggle-text">Other Plans</p>
            </div>
            {active ? (
                <div className="price__content">
                    <div className="price__card">
                        <div className="price__card-header">
                            <p className="price__card-title">Basic</p>
                            <p className='price__card-price'>$9.99</p>
                            <div className="price__card-info">
                                <div className="price__card-info-item">
                                    <p>15 credits (NFT)</p>
                                </div>
                                <div className="price__card-info-circle"></div>
                                <div className="price__card-info-item">
                                    <p>The best choice</p>
                                </div>
                            </div>
                        </div>
                        <div className="price__card-body">
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Undressing Feature</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Medium quality outputs</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Sex Poses & Lingerie sets</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Standard processing queue</p>
                            </div>
                        </div>
                        <Link href={ButtonLink} className='price__card-button-link' >
                            <button className="price__card-button">
                                <div className='price__card-button-inner'>
                                    <p className='price__card-button-inner-text'>Buy for</p>
                                    <p className='price__card-button-inner-old'>$19.98</p>
                                    <p className='price__card-button-inner-new'>$9.99</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="price__card price__card--active">
                        <div className="price__card-header">
                            <p className="price__card-title">Master</p>
                            <p className='price__card-price'>$19.99</p>
                            <div className="price__card-info">
                                <div className="price__card-info-item">
                                    <p>70 credits (NFT)</p>
                                </div>
                                <div className="price__card-info-circle"></div>
                                <div className="price__card-info-item">
                                    <p>Save 50%</p>
                                </div>
                            </div>
                        </div>
                        <div className="price__card-body">
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Undresser AI Feature</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Sex Poses & Lingerie sets</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>AI Face Swap</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Faster processing queue</p>
                            </div>
                        </div>
                        <Link href={ButtonLink} className='price__card-button-link' >
                            <button className="price__card-button price__card-button--active">
                                <div className='price__card-button-inner'>
                                    <p className='price__card-button-inner-text'>Buy for</p>
                                    <p className='price__card-button-inner-old'>$49.98</p>
                                    <p className='price__card-button-inner-new'>$19.99</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="price__card">
                        <div className="price__card-header">
                            <p className="price__card-title">Advanced</p>
                            <p className='price__card-price'>$59.99</p>
                            <div className="price__card-info">
                                <div className="price__card-info-item">
                                    <p>150 credits (NFT)</p>
                                </div>
                                <div className="price__card-info-circle"></div>
                                <div className="price__card-info-item">
                                    <p>Most comfortable</p>
                                </div>
                            </div>
                        </div>
                        <div className="price__card-body">
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Queue Skip</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Undress AI Options</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Access to basic traits</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Sex Poses</p>
                            </div>
                        </div>
                        <Link href={ButtonLink} className='price__card-button-link' >
                            <button className="price__card-button">
                                <div className='price__card-button-inner'>
                                    <p className='price__card-button-inner-text'>Buy for</p>
                                    <p className='price__card-button-inner-old'>$599.90</p>
                                    <p className='price__card-button-inner-new'>$59.99</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="price__content">
                    <div className="price__card">
                        <div className="price__card-header">
                            <p className="price__card-title">Ultimate</p>
                            <p className='price__card-price'>$47.99</p>
                            <div className="price__card-info">
                                <div className="price__card-info-item">
                                    <p>250 credits (NFT)</p>
                                </div>
                                <div className="price__card-info-circle"></div>
                                <div className="price__card-info-item">
                                    <p>The best choice</p>
                                </div>
                            </div>
                        </div>
                        <div className="price__card-body">
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Premium Quality</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Priority in Queue</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Sex Poses & Lingerie sets</p>
                            </div>
                            <div className="price__card-body-item price__card-body-item--active">
                                <Star />
                                <p>HD mode, No blur, No watermark</p>
                            </div>
                        </div>
                        <Link href={ButtonLink} className='price__card-button-link' >
                            <button className="price__card-button">
                                <div className='price__card-button-inner'>
                                    <p className='price__card-button-inner-text'>Buy for</p>
                                    <p className='price__card-button-inner-old'>$95.98</p>
                                    <p className='price__card-button-inner-new'>$47.99</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="price__card price__card--active">
                        <div className="price__card-header">
                            <p className="price__card-title">Artist</p>
                            <p className='price__card-price'>$209.99</p>
                            <div className="price__card-info">
                                <div className="price__card-info-item">
                                    <p>2500 credits (NFT)</p>
                                </div>
                                <div className="price__card-info-circle"></div>
                                <div className="price__card-info-item">
                                    <p>Save 50%</p>
                                </div>
                            </div>
                        </div>
                        <div className="price__card-body">
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Undressing Feature</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Sex Poses & Lingerie sets</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Queue Skip</p>
                            </div>
                            <div className="price__card-body-item price__card-body-item--active">
                                <Star />
                                <p>HD mode</p>
                            </div>
                            <div className="price__card-body-item price__card-body-item--active">
                                <Star />
                                <p>No blur - No watermark</p>
                            </div>
                        </div>
                        <Link href={ButtonLink} className='price__card-button-link' >
                            <button className="price__card-button price__card-button--active">
                                <div className='price__card-button-inner'>
                                    <p className='price__card-button-inner-text'>Buy for</p>
                                    <p className='price__card-button-inner-old'>$2,099.90</p>
                                    <p className='price__card-button-inner-new'>$209.99</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="price__card">
                        <div className="price__card-header">
                            <p className="price__card-title">Master</p>
                            <p className='price__card-price'>$67.99</p>
                            <div className="price__card-info">
                                <div className="price__card-info-item">
                                    <p>500 credits (NFT)</p>
                                </div>
                                <div className="price__card-info-circle"></div>
                                <div className="price__card-info-item">
                                    <p>Most comfortable</p>
                                </div>
                            </div>
                        </div>
                        <div className="price__card-body">
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Cumshot</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Accelerated Processing</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>Sex Poses & Lingerie sets</p>
                            </div>
                            <div className="price__card-body-item">
                                <PlanFeatureIcon />
                                <p>First in Queue</p>
                            </div>
                            <div className="price__card-body-item price__card-body-item--active">
                                <Star />
                                <p>HD mode, No blur, No watermark</p>
                            </div>
                        </div>
                        <Link href={ButtonLink} className='price__card-button-link' >
                            <button className="price__card-button">
                                <div className='price__card-button-inner'>
                                    <p className='price__card-button-inner-text'>Buy for</p>
                                    <p className='price__card-button-inner-old'>$169.98</p>
                                    <p className='price__card-button-inner-new'>$67.99</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Price