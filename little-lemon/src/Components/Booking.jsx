import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

const Booking = ({
    bookingData, setBookingData,
    availableTimes, setAvailableTimes,
    submitForm
}) => {
    return(
        <>
        <Header/>
        <main>
            <div className="bookingForm">
                <BookingForm 
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                    availableTimes={setAvailableTimes}
                    submitForm={submitForm}
                />
            </div>
        </main>
        <Footer/>
        </>
    )
}
export default Booking;