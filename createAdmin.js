import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import User from './models/User.js';
import connectDB from './config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createAdminUser = async () => {
  try {
    // Connect to database
    await connectDB();

    // Admin user details
    const adminData = {
      name: 'Admin User',
      email: 'admin@jobboard.com',
      password: 'Admin@123',
      role: 'admin'
    };

    // Check if admin already exists
    const adminExists = await User.findOne({ email: adminData.email });
    if (adminExists) {
      console.log('Admin user already exists');
      await mongoose.connection.close();
      return;
    }

    // Create admin user
    const admin = await User.create(adminData);
    console.log('Admin user created successfully:');
    console.log({
      name: admin.name,
      email: admin.email,
      role: admin.role
    });

    // Close database connection
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

// Run the admin creation function
createAdminUser();