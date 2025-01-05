import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
    try {
        const saltRounds=10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }   catch (error) { 
        console.error(error);
    }
};

export const comparePaasword=async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error(error);
    }
};
