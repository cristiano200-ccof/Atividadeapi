import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Por favor, defina a variável MONGODB_URI no arquivo .env');
}

export async function connectDB() {
  try {
    // Evita reconectar se já estiver conectado
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(MONGODB_URI);
    console.log('🚀 Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
  }
}
