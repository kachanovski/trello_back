const logOut = async (req, res) => {
    try {
        res.cookie("token", '', {
            expires: new Date(0),
        })
            .status(201).json({
            resultCode: 0,
            message: 'logOut success'
        })
    } catch (e) {
        res.status(500).json({
            resultCode: 1,
            message: 'Yoops, something went wrong.'
        })
    }

}
module.exports = logOut