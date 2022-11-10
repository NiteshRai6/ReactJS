import React from "react";
import "./Page.css";
import NavBar from "./NavBar"
import PageStepper from "./PageStepper";
import Button from "react-bootstrap/Button";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import Form from 'react-bootstrap/Form';

const PageContent = () => {
    return (
        <>
            <div className="container-fluid my-nav-bar">
                <NavBar />
            </div>

            <div className="container-fluid content-stepper">
                <PageStepper />
            </div>

            <div className="container-fluid ipfs-url-container">
                <span className="url-title">IPFS Url</span>
                <span className="ms-3">ipfs://(cid)/path/to/subresource/cat.jpg</span>
                <Button className="btn copy-content-btn ms-3">
                    <ContentCopyRoundedIcon className="copy-icon" />
                </Button>
            </div>

            <div className="container-fluid main-page-container">

                <div className="contract-transaction-successful-container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-sm-12">
                            <div className="transaction-successful-main-container">
                                <div className="row row-cols-1">
                                    <div className="col-12">
                                        <div className="transaction-successful-title-container">
                                            <CheckCircleRoundedIcon className="transaction-successful-icon" />
                                            <span className="ms-3 transaction-successful-title">Smart Contract Transaction Successful </span>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-1">
                                        <div className="transaction-successful-title-container">
                                            <span className="ms-5">Thank you for choosing Legitt as your Partner</span>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-4">
                                        <div className="transaction-successful-title-container">
                                            <span className="ms-5 transaction-details-title">Your Transaction Details</span>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-4">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-md-10 col-sm-12">
                                                <div className="transaction-details-container">
                                                    <div className="row row-cols-1">
                                                        <div className="col-12">
                                                            <div className="transaction-details-content-list">
                                                                <Form.Check checked />
                                                                <span>Transaction Hash:</span>
                                                                <span>Oxib44d0Ooda8f893fc90a25d920b82932300cdfc3880056b250b644</span>
                                                                <Button className="btn copy-content-btn">
                                                                    <ContentCopyRoundedIcon className="copy-icon" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="transaction-details-content-list1">
                                                                <Form.Check checked />
                                                                <span>Status:</span>
                                                                <div className="status-container">
                                                                    <CheckCircleRoundedIcon />
                                                                    <span className="ms-2">Success</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="transaction-details-content-list1">
                                                                <Form.Check checked />
                                                                <span className="">Block:</span>
                                                                <span className="margin-left">28062332</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-10">
                                                            <div className="transaction-details-content-list1">
                                                                <Form.Check checked />
                                                                <span>Block Hash:</span>
                                                                <span>Oxib44d0Ooda8f893fc90a25d920b82932300cdfc3880056b250b644</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="transaction-details-content-list1">
                                                                <Form.Check checked />
                                                                <span>Timestamp:</span>
                                                                <div className="status-container me-3">
                                                                    <AccessTimeFilledRoundedIcon />
                                                                    <span className="ms-2">2022-9-30 20:24:05</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="transaction-details-content-list">
                                                                <Form.Check checked />
                                                                <span>From:</span>
                                                                <span>Oxib44d0Ooda8f893fc90a25d920b82932300cdfc3880056b250b644</span>
                                                                <Button className="btn copy-content-btn">
                                                                    <ContentCopyRoundedIcon className="copy-icon" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="transaction-details-content-list">
                                                                <Form.Check checked />
                                                                <span>To:</span>
                                                                <span>Contract Oxib44d00aeda8f893fc90a25d92ab8293230ecdfc3886056b644</span>
                                                                <Button className="btn copy-content-btn">
                                                                    <ContentCopyRoundedIcon className="copy-icon" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="col-7">
                                                            <div className="transaction-details-content-list1">
                                                                <Form.Check checked />
                                                                <span className="">Value:</span>
                                                                <span className="margin-left">MATIC ($0.00)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-4">
                                        <div className="send-container">
                                            <div className="send-btn-container">
                                                <span>Send via :</span>

                                                <Button onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open("http://gmail.com", "_blank");
                                                }}
                                                    className="btn send-btn ms-3">
                                                    <EmailRoundedIcon className="send-icon" /> </Button>

                                                <Button onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open("http://google.com", "_blank");
                                                }}
                                                    className="btn send-btn ms-3">
                                                    <ScreenShareRoundedIcon className="send-icon" /> </Button>

                                                <Button onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open("http://Whatsapp.com", "_blank");
                                                }}
                                                    className="btn send-btn ms-3">
                                                    <img className="send-icon img-fluid" src='./images/whatsapp.png' alt='WhatsappLogo' /> </Button>

                                                <Button onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open("http://Telegram.org", "_blank");
                                                }}
                                                    className="btn send-btn ms-3">
                                                    <img className="send-icon img-fluid" src='./images/telegram.png' alt='TelegramLogo' /> </Button>
                                            </div>

                                            <div className="download-qr">
                                                <Button onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open("https://www.the-qrcode-generator.com/", "_blank");
                                                }}
                                                    className="btn send-btn1 ms-3">
                                                    <ArrowDownwardRoundedIcon className="send-icon" />  QR </Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageContent;
