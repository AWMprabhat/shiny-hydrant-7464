import React from 'react'
import styles from "./AboutPage.module.css";
import {HiOutlineSpeakerphone,HiBeaker} from "react-icons/hi"
import {BsBarChartLine,BsMic} from "react-icons/bs"
import {IoNewspaperSharp} from "react-icons/io5"
// import VideoThumbnail from 'react-video-thumbnail';
import ReactPlayer from 'react-player';

const AboutPage = () => {
  return (
		<div style={{ width: "100%", height: "fit-content" }}>
			<div className={styles.navBarBox}>
				<div className={styles.navBarAbout}>
					<div className={styles.logoAbout}>
						<img src="http://infoedge.in/images/logo.gif" alt="" />
					</div>
					<div className={styles.optionsAbout}>
						<div className={styles.optionsAboutLabel}>
							<div class={styles.dropdown}>
								<button class={styles.dropbtn}>ABOUT</button>
								<div class={styles.dropdown_content}>
									<a href="#2">Overview</a>
									<a href="#2">Quick Facts/Milestones</a>
									<a href="#2">Vision, Mission & Values</a>
									<a href="#2">Board of Directors</a>
									<a href="#2">Management Team</a>
								</div>
							</div>
						</div>
						<div className={styles.optionsAboutLabel}>
							<div class={styles.dropdown}>
								<button class={styles.dropbtn}>BUSINESS</button>
								<div class={styles.dropdown_content1}>
									<a href="#2">Overview</a>
									<a href="#2">Recruitment</a>
									<a href="#2">Real Estate</a>
									<a href="#2">Matrimony</a>
									<a href="#2">Education</a>
									<a href="#2">Investee Companies</a>
									<a href="#2">Research</a>
								</div>
							</div>
						</div>
						<div className={styles.optionsAboutLabel}>
							<div class={styles.dropdown}>
								<button class={styles.dropbtn}>CAREERS</button>
							</div>
						</div>
						<div className={styles.optionsAboutLabel}>
							<div class={styles.dropdown}>
								<button class={styles.dropbtn}>MEDIA</button>
							</div>
						</div>
						<div className={styles.optionsAboutLabel}>
							<div class={styles.dropdown}>
								<button class={styles.dropbtn}>
									INVESTOR RELATIONS
								</button>
							</div>
						</div>
						<div className={styles.optionsAboutLabel}>
							<div class={styles.dropdown}>
								<button class={styles.dropbtn}>
									SECURITY & PRIVACY
								</button>
							</div>
						</div>
						<div className={styles.optionsAboutLabel}>
							<div class={styles.dropdown}>
								<button class={styles.dropbtn}>CONTACT</button>
								<div class={styles.dropdown_content}>
									<a href="#2">
										Registered & Corporate Office
									</a>
									<a href="#2">Summons/Notices</a>
									<a href="#2">Grievances</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.imageAbout}>
				<div className={styles.container}>
					{/* <img src="/w3images/notebook.jpg" alt="Notebook" style="width:100%;"/> */}
					<img
						src="http://infoedge.in/images/home-banner.jpg"
						alt=""
					/>
					<div className={styles.content}>
						<p>
							As one of the very few profitable pure play internet
							companies in the country, Info Edge is India’s
							premier online classifieds company in recruitment,
							matrimony, real estate, education and related
							services.
						</p>
						<button className={styles.btnAbout}>LEARN MORE</button>
					</div>
					<div
						style={{
							position: "absolute",
							display: "flex",
							width: "450px",
							height: "100%",
						}}>
						<div
							style={{
								marginLeft: "1200px",
								display: "block",
								width: "50%",
							}}>
							<div
								className={styles.hoverAbout}
								style={{
									backgroundColor: "rgb(154,105,186)",
									width: "100%",
									height: "55%",
								}}>
								<div
									style={{
										padding: "10px",
										marginLeft: "20px",
									}}>
									<HiOutlineSpeakerphone
										size="150px"
										color="white"
									/>
								</div>
								<p style={{ color: "white", fontSize: "24px" }}>
									Announcements
								</p>

								<div
									style={{
										marginTop: "20px",
										color: "white",
										textAlign: "left",
										marginLeft: "10px",
									}}>
									<p>Aug 24,2022</p>
									<p>IEIL Reg 30 HUM</p>
								</div>
							</div>
							<div
								className={styles.hoverAbout}
								style={{
									backgroundColor: "rgb(14,168,217)",
									width: "100%",
									height: "45%",
								}}>
								<div
									style={{
										padding: "25px 40px",
										marginLeft: "20px",
									}}>
									<HiBeaker size="100px" color="white" />
								</div>
								<p
									style={{
										color: "white",
										fontSize: "28px",
										cursor: "pointer",
									}}>
									Our Businesses
								</p>
							</div>
						</div>
						<div style={{ display: "block", width: "50%" }}>
							<div
								className={styles.hoverAbout}
								style={{
									backgroundColor: "rgb(55,189,162)",
									width: "100%",
									height: "45%",
								}}>
								<div
									style={{
										padding: "10px",
										marginLeft: "20px",
									}}>
									<div
										style={{
											padding: "30px 10px",
											marginLeft: "20px",
										}}>
										<BsBarChartLine
											size="100px"
											color="white"
										/>
									</div>
									<p
										style={{
											color: "white",
											fontSize: "24px",
											cursor: "pointer",
										}}>
										Info Edge Stock
									</p>
								</div>
							</div>
							<div
								className={styles.hoverAbout}
								style={{
									backgroundColor: "rgb(72,63,118)",
									width: "100%",
									height: "55%",
								}}>
								<div
									style={{
										padding: "10px",
										marginLeft: "20px",
									}}>
									<IoNewspaperSharp
										size="150px"
										color="white"
									/>
								</div>
								<p style={{ color: "white", fontSize: "24px" }}>
									Press Releases
								</p>

								<div
									style={{
										marginTop: "20px",
										color: "white",
										textAlign: "left",
										marginLeft: "10px",
									}}>
									<div
										style={{
											width: "70%",
											fontWeight: "lighter",
										}}>
										<p>
											For InvestorsInfo Edge (India)
											Limited announces Q3 FY21 results
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.container2}>
				<div style={{ width: "fit-content", margin: "20px 0 0 10px" }}>
					<p style={{ fontSize: "30px", color: "gray" }}>
						Our Businesses
					</p>
				</div>
				<div className={styles.aboutLogos}>
					<div>
						<img
							src="http://infoedge.in/images/scroll-logo1.gif"
							alt=""
						/>
					</div>
					<div>
						<img
							src="http://infoedge.in/images/scroll-logo2.gif"
							alt=""
						/>
					</div>
					<div>
						<img
							src="http://infoedge.in/images/scroll-logo3.gif"
							alt=""
						/>
					</div>
					<div>
						<img
							src="http://infoedge.in/images/scroll-logo4.gif"
							alt=""
						/>
					</div>
					<div>
						<img
							src="http://infoedge.in/images/scroll-logo5.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							src="http://infoedge.in/images/scroll-logo6.gif"
							alt=""
						/>
					</div>
					<div>
						<img
							src="http://infoedge.in/images/scroll-logo8.gif"
							alt=""
						/>
					</div>
					<div>
						<img
							src="http://infoedge.in/images/scroll-logo09.gif"
							alt=""
						/>
					</div>
					<div>
						<img
							src="http://infoedge.in/images/scroll-logo10.gif"
							alt=""
						/>
					</div>
				</div>
				<div className={styles.infoAbout}>
					<div className={styles.infoStatAbout}>
						<p
							style={{
								color: "white",
								fontWeight: "500",
								textAlign: "left",
								margin: "10px 20px",
								fontSize: "24px",
							}}>
							Infoedge Stock
						</p>
						<div
							style={{
								display: "flex",
								borderBottom: "0.5px solid gray",
							}}>
							<p
								style={{
									color: "white",
									margin: "10px 20px 0 80px",
									fontSize: "45px",
								}}>
								4436.45
							</p>
							<div
								style={{
									color: "white",
									fontSize: "medium",
									textAlign: "left",
									marginTop: "20px",
								}}>
								<p>+ 64</p>
								<p>1.48% Change</p>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								borderBottom: "0.5px solid gray",
								justifyContent: "space-between",
							}}>
							<p
								style={{
									color: "white",
									fontSize: "15px",
									textAlign: "left",
									marginTop: "20px",
									padding: "0 0 10px 0",
								}}>
								Market Opened at
							</p>
							<p
								style={{
									color: "white",
									fontSize: "15px",
									marginTop: "20px",
									padding: "0 0 10px 0",
								}}>
								4525.00
							</p>
						</div>
						<div
							style={{
								display: "flex",
								borderBottom: "0.5px solid gray",
								justifyContent: "space-between",
							}}>
							<p
								style={{
									color: "white",
									fontSize: "15px",
									textAlign: "left",
									marginTop: "20px",
									padding: "0 0 10px 0",
								}}>
								Daily High
							</p>
							<p
								style={{
									color: "white",
									fontSize: "15px",
									marginTop: "20px",
									padding: "0 0 10px 0",
								}}>
								4624.90
							</p>
						</div>
						<div
							style={{
								display: "flex",
								borderBottom: "0.5px solid gray",
								justifyContent: "space-between",
							}}>
							<p
								style={{
									color: "white",
									fontSize: "15px",
									textAlign: "left",
									marginTop: "20px",
									padding: "0 0 10px 0",
								}}>
								Daily Low
							</p>
							<p
								style={{
									color: "white",
									fontSize: "15px",
									marginTop: "20px",
									padding: "0 0 10px 0",
								}}>
								4422.05
							</p>
						</div>
					</div>
					<div className={styles.infoStatAbout1}>
						<div
							style={{
								display: "flex",
								padding: "20px 0 0 0",
								justifyContent: "space-around",
							}}>
							<p
								style={{
									color: "grey",
									fontSize: "24px",
									textAlign: "left",
									fontWeight: "600",
								}}>
								Press Releases
							</p>
							<img
								src="http://infoedge.in/images/logo-infoedge.gif"
								alt=""
							/>
						</div>
						<div style={{ display: "flex", marginTop: "50px" }}>
							<div
								style={{
									padding: "0 10px",
									textAlign: "left",
								}}>
								<p
									style={{
										color: "grey",
										fontSize: "18px",
										textAlign: "left",
										fontWeight: "600",
									}}>
									{" "}
									Investors
								</p>
								<p style={{ marginTop: "10px" }}>
									Info Edge (India) Limited announces Q3 FY21
									results
								</p>
								<p style={{ marginTop: "10px" }}>
									Info Edge (India) Limited announces Q1 FY21
									results
								</p>
							</div>
							<div
								style={{
									padding: "0 10px",
									textAlign: "left",
								}}>
								<p
									style={{
										color: "grey",
										fontSize: "18px",
										textAlign: "left",
										fontWeight: "600",
									}}>
									{" "}
									For Media
								</p>
								<p style={{ marginTop: "10px" }}>
									Info Edge (India) Limited announces Q2 FY21
									results
								</p>
								<p style={{ marginTop: "10px" }}>
									Info Edge (India) Limited announces Q4 FY16
									results
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.aboutVideos}>
					<div className={styles.aboutAlerts}>
						<div style={{ padding: "10px 0 20px 80px" }}>
							<IoNewspaperSharp size="130px" color="white" />
						</div>
						<p>
							Get our Newsletter or Press Releases or
							Announcements
						</p>
						<button className={styles.btnAlerts}>
							SIGN UP FOR ALERTS
						</button>
					</div>
					<div className={styles.aboutThumbnail}>
						<div style={{ margin: "10px 0 0 5px" }}>
							<ReactPlayer
								className="videoFrame"
								url="https://youtu.be/sXtf85DaM58"
								playing
								controls
							/>
						</div>
					</div>
				</div>
				<div className={styles.aboutAnnouce}>
					<div className={styles.aboutAnnouce1}>
						<p
							style={{
								fontSize: "24px",
								fontWeight: "500",
								textAlign: "left",
								margin: "20px 0 0 20px",
							}}>
							Annoucements
						</p>
						<div
							style={{
								textAlign: "left",
								margin: "20px 0 0 20px",
							}}>
							<p style={{ color: "brown" }}>August 24, 2022</p>
							<p style={{}}>IEIL Reg 30 HUM</p>
						</div>
						<div
							style={{
								textAlign: "left",
								margin: "20px 0 0 20px",
							}}>
							<p style={{ color: "brown" }}>August 19, 2022</p>
							<p style={{}}>IEIL Transcriipt 12-08-2022</p>
						</div>
						<div
							style={{
								textAlign: "left",
								margin: "20px 0 0 20px",
							}}>
							<p style={{ color: "brown" }}>August 16, 2022</p>
							<p style={{}}>IEIL Investor Conference 16082022</p>
						</div>
						<p
							style={{
								margin: "50px 0 0 450px",
								cursor: "pointer",
							}}>
							View all
						</p>
					</div>
					<div className={styles.aboutAnnouce2}>
						<div style={{ padding: "10px 0 20px 140px" }}>
							<BsMic size="130px" color="white" />
						</div>
						<p style={{ color: "white", fontSize: "30px" }}>
							Naukri Jobspeak
						</p>
						<p
							style={{
								color: "white",
								fontSize: "15px",
								margin: "20px 0 0 0",
							}}>
							A Report on Hiring Activity in India
						</p>
					</div>
				</div>
			</div>
			{/* <div className={styles.aboutFooter} >
            <div className={styles.aboutFooter1}>
               
            </div>
            <div className={styles.aboutFooter2}>
                 
            </div>
          </div>
          <div className={styles.aboutBottom}>
              <p>
              All rights reserved © 2015 Info Edge India Ltd., CIN No.: L74899DL1995PLC068021
              </p>
          </div> */}
			<div
				className={styles.carouselBoots}
				style={{ marginBottom: "40px" }}>
				<p style={{ fontSize: "30px", color: "gray" }}>
					Our Investee Companies
				</p>
				<div
					id="carouselExampleSlidesOnly"
					data-bs-interval="500"
					class="carousel slide"
					data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img
								src="http://infoedge.in/images/logo-big.gif"
								class="d-block w-100"
								alt="photo1"
							/>
						</div>
						<div class="carousel-item">
							<img
								src="http://infoedge.in/images/logo-rare.gif"
								class="d-block w-100"
								alt="photo2"
							/>
						</div>
						<div class="carousel-item">
							<img
								src="http://infoedge.in/images/logo-diro.gif"
								class="d-block w-100"
								alt="photo3"
							/>
						</div>
						<div class="carousel-item">
							<img
								src="http://infoedge.in/images/logo-vacation.gif"
								class="d-block w-100"
								alt="photo4"
							/>
						</div>
						<div class="carousel-item">
							<img
								src="http://infoedge.in/images/logo-mydala.gif"
								class="d-block w-100"
								alt="photo5"
							/>
						</div>
						<div class="carousel-item">
							<img
								src="http://infoedge.in/images/logo-policy-bazaar.gif"
								class="d-block w-100"
								alt="photo6"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default AboutPage